import Image from "next/image";

export default function Elements() {
  return (
    <section className="Elements mt-[80px]">
      <div className="wrapper flex flex-col relative">
        <Image
          src="/images/northprim2/saturn.webp"
          alt="Decorative object"
          width={384}
          height={400}
          className="left-[-124px] absolute bottom-[120px]"
        />
        <Image
          src="/images/northprim2/spring.webp"
          alt="Decorative object"
          width={406}
          height={406}
          className="absolute right-0 translate-x-1/2 top-[30%]"
        />
        <div className="flex items-center gap-[60px]">
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
          />
        </div>

        <div className="mt-[300px] flex justify-end">
          <p className="max-w-[880px] text-[48px] leading-[1.4]">
            No element is random, nor a coincidence. Each represents a piece of
            the story, fragmented throughout the rooms and left for the user to
            decypher.
          </p>
        </div>
      </div>
    </section>
  );
}
