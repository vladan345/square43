import styles from "./Contact.module.css";
import mailchimp from "@mailchimp/mailchimp_marketing";
import Newsletter from "./ui/Newsletter";

export const metadata = {
  openGraph: {
    title: "Square43 Studio | Contact",
    description: "We can't wait to meet you",
    images: [{ url: "/images/Contact.png" }],
    url: "https://square43.com/contact",
  },
  title: "Square43 Studio | Contact",
  description: "We can't wait to meet you",
  metadataBase: new URL("https://square43.com/contact"),
};

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_API_SERVER, // e.g. us1
});

export default function Page() {
  async function subscribeToMailchimp(formData) {
    "use server";

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
    console.log(rawFormData);
    // mutate data
    // revalidate cache
    if (!rawFormData.email || !rawFormData.firstName || !rawFormData.services) {
      throw new Error("Please fill in all the fields");
    }

    // try {
    //   await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID, {
    //     email_address: rawFormData.email,
    //     status: "subscribed",
    //     merge_fields: {
    //       FNAME: rawFormData.firstName,
    //       LNAME: "Markovic",
    //       SERVICE: "Web Development",
    //       COUNTRY: rawFormData.country,
    //     },
    //   });
    //   console.log("Success");
    // } catch (error) {
    //   console.log(error);
    // }
  }
  return (
    <main>
      <div className={styles.Contact}>
        <div className="wrapper">
          <h1 className={styles.title}>We can&apos;t wait to meet you.</h1>
          <p className={styles.subheading}>
            Meet us over email, live{" "}
            <span className={styles.gradientText}>meeting</span>,{" "}
            <span className={styles.gradientText}>food</span> or{" "}
            <span className={styles.gradientText}>drink</span> - it&apos;s your
            choice.
            <br />
            <br />
            Let&apos;s get in touch.
          </p>
          {/* <div className={styles.row}>
            <div className={styles.col}>
              <p className={styles.preheading}>Call us</p>
              <a className={styles.titleLink} href="tel:+381603339493">
                +381 60 333 94 93
              </a>
              <p className={styles.preheading}>Maybe drop us a line</p>
              <a className={styles.titleLink} href="mailto:studio@square43.com">
                studio@square43.com
              </a>
            </div>
            <div className={styles.col}>
              <p className={styles.preheading}>Or visit</p>
              <p className={styles.titleLink}>Belgrade, Serbia</p>
            </div>
          </div> */}
          <div className={styles.row}>
            <form action={subscribeToMailchimp}>
              <Newsletter />
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
