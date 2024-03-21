"use server";
import mailchimp from "@mailchimp/mailchimp_marketing";

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER, // e.g. us1
});

export async function subscribeToMailchimp(formData) {
  let response = {
    message: "",
    status: "",
  };
  const rawFormData = {
    email: formData.get("email"),
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    country: formData.get("country"),
    services: formData.getAll("service"),
    budget: formData.get("budget"),
    message: formData.get("message"),
  };
  rawFormData.services = rawFormData.services.join(", ");

  // mutate data
  // revalidate cache
  if (!rawFormData.email || !rawFormData.firstName || !rawFormData.services) {
    response.message = "Please fill in all of the required fields.";
    response.status = "error";
    return response;
  }

  try {
    await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
      email_address: rawFormData.email,
      status: "subscribed",
      merge_fields: {
        FNAME: rawFormData.firstName,
        LNAME: rawFormData.lastName,
        COUNTRY: rawFormData.country,
        SERVICES: rawFormData.services,
        BUDGET: rawFormData.budget,
        MESSAGE: rawFormData.message,
      },
    });
    response.message = "Success!";
    response.status = "success";
    return response;
  } catch (error) {
    // let text = JSON.parse(error.response.text);
    // console.log(error.response.text.title);
    response.message = "There has been a problem";
    response.status = "error";
    return response;
  }
}
