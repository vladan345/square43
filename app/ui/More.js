import styles from "./styles/More.module.css";
import FloatingCard from "../../components/FloatingCard";
import Link from "next/link";
import Image from "next/image";

function More() {
  const services = [
    {
      title: "Web Dev",
      subservices: [
        "Scroll sequences",
        "SEO optimization",
        "Multilanguage",
        "Mobile optimization",
      ],
      link: "/web-development",
      top: 250,
      left: 50,
    },
    {
      title: "Web Design",
      subservices: [
        "Wireframing",
        "UX/UI optimization",
        "Copywriting",
        "A/B testing",
      ],
      link: "/web-design",
      top: 550,
      left: 400,
    },
    {
      title: "E-Commerce",
      subservices: [
        "Web shop development",
        "Payment integration",
        "Store setup",
        "SEO optimization",
        "Email automation",
        "Shipping integration",
      ],
      link: "/e-commerce",
      top: 380,
      left: 700,
    },
    {
      title: "Copywriting",
      subservices: ["Website copy", "Social media copy"],
      link: "/copywriting",
      top: 800,
      left: 200,
    },
    {
      title: "Social Media",
      subservices: [
        "Monthly planning",
        "Ad campaigns for all formats",
        "Copywriting",
        "Blog posts",
        "Communication management",
      ],
      link: "/social-media",
      top: 1000,
      left: 550,
    },
    {
      title: "Branding",
      subservices: [
        "Brand strategy",
        "Logo design",
        "Naming",
        "Brand book design",
      ],
      link: "/branding",
      top: 800,
      left: 750,
    },
  ];

  return (
    <div className={styles.More}>
      <div className={styles.wrapper}>
        <div className={styles.moreWrap}>
          <p className={styles.tag}>Services</p>
          {services.map((service) => (
            <FloatingCard service={service} key={service.title} />
          ))}
          <div className={styles.linkWrap}>
            <Link href={"/services"} className="readMore">
              ALL SERVICES
              <div className="icon">
                <Image
                  src="/images/arrow.svg"
                  alt="Arrow icon"
                  width={40}
                  height={40}
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default More;
