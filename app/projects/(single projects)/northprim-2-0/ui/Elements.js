import Image from "next/image";

export default function Elements() {
  return (
    <section className="Elements mt-[80px] overflow-hidden">
      <div className="wrapper relative flex flex-col">
        <Image
          src="/images/northprim2/saturn.webp"
          alt="Decorative object"
          width={384}
          height={400}
          className="float2 absolute bottom-[120px] left-[-124px] xl:bottom-[260px] xl:max-w-[280px] md:hidden"
        />
        <div className="absolute right-0 top-[30%] translate-x-1/2 xl:max-w-[300px] md:right-[50px] md:top-[40%] md:max-w-[200px]">
          <Image
            src="/images/northprim2/spring.webp"
            alt="Decorative object"
            width={406}
            height={406}
            className="float4"
          />
        </div>
        <div className="flex items-center gap-[60px] md:flex-col md:items-start">
          <div>
            <h2>3D Elements</h2>
            <p className="max-w-[520px]">
              This aspect of Northprim's transformation entailed more than
              entertaining 3D elements - our Studio developed a brand new
              concept of rooms in 3D space that users could scroll through and
              truly immerse themselves in the vision and understand the story
              behind the brand.
            </p>
          </div>
          <Image
            src="/images/northprim2/cube.webp"
            alt="Decorative object"
            width={377}
            height={417}
            className="float2 xl:max-w-[280px] md:max-w-[190px]"
          />
        </div>

        <div className="mt-[300px] flex justify-end md:mt-[200px] md:flex-col md:items-center md:gap-[16px]">
          <p className="max-w-[880px] text-[48px] leading-[1.4] md:text-[32px]">
            No element is random, nor a coincidence. Each represents a piece of
            the story, fragmented throughout the rooms and left for the user to
            decypher.
          </p>
          <Image
            src="/images/northprim2/saturn.webp"
            alt="Decorative object"
            width={192}
            height={200}
            className="float4 hidden pb-[20px] md:block"
          />
        </div>
      </div>
    </section>
  );
}
