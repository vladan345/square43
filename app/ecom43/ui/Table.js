import React from "react";
import styles from "./styles/Table.module.css";
import Image from "next/image";

export default function Table() {
  const content = [
    {
      feature: "3D Graphics",
      cons: "Not typically included",
      pros: "Included",
    },
    {
      feature: "Limitless Design Options",
      cons: "Limited to theme options",
      pros: "Fully customizable",
    },
    {
      feature: "Fully Customizable Storefront",
      cons: "Limited customization",
      pros: "Complete flexibility",
    },
    {
      feature: "Unique Design Tailoring",
      cons: "Often generic",
      pros: "Tailored to client's brand",
    },
    {
      feature: "Advanced Animations",
      cons: "Basic animations",
      pros: "Superior, tailored animations",
    },
    {
      feature: "Exclusive Design Elements",
      cons: "Shared with other stores",
      pros: "Unique to each Client",
    },
    {
      feature: "Enhanced User Experience (UX)",
      cons: "Standard UX",
      pros: "Custom-designed UX",
    },
    {
      feature: "Custom Functionalities",
      cons: "Limited by theme scope",
      pros: "Tailored to Client's specific needs",
    },
    {
      feature: "Optimized for Speed",
      cons: "Varies by theme",
      pros: "Optimized for performance",
    },
    {
      feature: "Scalability",
      cons: "Limited by theme",
      pros: "Fully scalable",
    },
    {
      feature: "Ongoing Support and Maintenance",
      cons: "Limited or standard",
      pros: "Dedicated support and updates",
    },
    {
      feature: "Compliance with Latest Standards",
      cons: "Varies",
      pros: "Up-to-date with latest standards",
    },
  ];
  return (
    <section className="border-t border-t-[#e0e0e0] bg-gradient-to-b from-[#f8f8f8] pb-[140px] pt-[170px] md:pb-[80px] md:pt-[80px]">
      <div className="wrapper">
        <h2 className="text-center text-[32px] font-normal">
          You bring the product, we will provide the vision.
          <br />
          Already have a clear perspective? We will help you breathe life into
          it!
        </h2>

        <table className={styles.table}>
          <thead className={`${styles.gradientBorder}`}>
            <tr>
              <th className="text-[24px] md:text-[16px] md:leading-[1]">
                Feature
              </th>
              <th className="text-[24px] md:!text-center md:text-[16px] md:leading-[1]">
                Shopify Predefined Themes
              </th>
              <th
                className={`${styles.highlight} text-[24px] md:!text-center md:text-[16px] md:leading-[1]`}
              >
                Ecom43 Custom Solutions
              </th>
            </tr>
          </thead>
          <tbody>
            {content.map((row, index) => (
              <tr
                key={index}
                className="h-[80px] border-b border-b-[#B5B5B5] md:h-[50px]"
              >
                <td className="text-[20px] font-semibold md:!text-left md:text-[14px] md:leading-[1]">
                  {row.feature}
                </td>
                <td
                  className={`relative py-[24px] pl-[42px] text-[18px] font-normal`}
                >
                  <Image
                    className="absolute left-0 top-1/2 -translate-y-1/2 md:left-1/2 md:h-[24px] md:w-[24px] md:-translate-x-1/2"
                    src="/images/cons.svg"
                    alt="Cons"
                    width={32}
                    height={32}
                  />
                  <span className="lg:hidden">{row.cons}</span>
                </td>
                <td
                  className={`relative py-[24px] pl-[42px] text-[18px] font-normal`}
                >
                  <Image
                    className="absolute left-0 top-1/2 -translate-y-1/2 md:left-1/2 md:h-[24px] md:w-[24px] md:-translate-x-1/2"
                    src="/images/pros.svg"
                    alt="Cons"
                    width={32}
                    height={32}
                  />
                  <span className="lg:hidden">{row.pros}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
