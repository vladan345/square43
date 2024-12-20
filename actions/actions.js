"use server";
// import mailchimp from "@mailchimp/mailchimp_marketing";
import { google } from "googleapis";

// mailchimp.setConfig({
//   apiKey: process.env.MAILCHIMP_API_KEY,
//   server: process.env.MAILCHIMP_API_SERVER, // e.g. us1
// });

export async function subscribeToMailchimp(formData) {
  "use server";
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
    //  budget: formData.get("budget"),
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
    const auth = new google.auth.GoogleAuth({
      credentials: {
        projectId: "square43",
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });

    const sheets = google.sheets({
      auth: await auth.getClient(),
      version: "v4",
    });

    function getCurrentDateTimeString() {
      const now = new Date();

      // Adjust for Belgrade timezone, which is UTC+2 or UTC+1 depending on DST
      const belgradeOffset = 2; // UTC+2 in standard time, UTC+1 in DST
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const belgradeTime = new Date(utc + 3600000 * belgradeOffset);

      // Format date and time as string (e.g., "2024-06-20 15:30:00")
      const dateString = belgradeTime.toISOString().split("T")[0];
      const timeString = belgradeTime.toTimeString().split(" ")[0];

      return `${dateString} ${timeString}`;
    }

    const googleResponse = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "A1:H1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            rawFormData.firstName,
            rawFormData.lastName,
            rawFormData.email,
            rawFormData.country,
            rawFormData.services,
            // rawFormData.budget,
            rawFormData.message,
            getCurrentDateTimeString(),
          ],
        ],
      },
    });

    // await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
    //   email_address: rawFormData.email,
    //   status: "subscribed",
    //   merge_fields: {
    //     FNAME: rawFormData.firstName,
    //     LNAME: rawFormData.lastName,
    //     COUNTRY: rawFormData.country,
    //     SERVICES: rawFormData.services,
    //     BUDGET: rawFormData.budget,
    //     MESSAGE: rawFormData.message,
    //   },
    // });
    response.message = "Success!";
    response.status = "success";
    return response;
  } catch (error) {
    console.log(error.message);
    // let text = JSON.parse(error.response.text);
    // console.log(error.response.text.title);
    response.message = "There has been a problem";
    response.status = "error";
    return response;
  }
}
