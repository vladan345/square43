import Link from "next/link";
import Image from "next/image";

export default function Links() {
  return (
    <div className="flex content-center flex-wrap justify-center my-[50px] relative">
      <div className="w-[800px] gap-[50px] flex flex-row justify-between md:flex-col md:px-[20px] md:gap-[20px]">
        <Link
          href="/services"
          className="readMore flex flex-row justify-between"
        >
          Services
          <div className="icon ">
            <Image
              src="/images/arrow.svg"
              alt="Arrow icon"
              width={40}
              height={40}
            />
          </div>
        </Link>
        <Link
          href="/projects"
          className="readMore flex flex-row justify-between"
        >
          Our work
          <div className="icon">
            <Image
              src="/images/arrow.svg"
              alt="Arrow icon"
              width={40}
              height={40}
            />
          </div>
        </Link>
        <Link
          href="/thoughts"
          className="readMore flex flex-row justify-between"
        >
          Blog
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
  );
}
