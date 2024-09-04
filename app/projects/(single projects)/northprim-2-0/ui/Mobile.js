import Image from "next/image";

export default function Mobile() {
  return (
    <section className="Mobile pt-[100px] pb-[180px] relative z-[0] overflow-x-clip">
      <Image
        src="/images/northprim2/triangles2.webp"
        alt="Decorative object"
        width={440}
        height={380}
        className="absolute top-[-100px] right-[-120px] z-[1]"
      />
      <div className="flex justify-start absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-screen overflow-hidden z-[0]">
        <Image
          src="/images/northprim2/blur4.webp"
          alt="Decorative background"
          width={2486}
          height={2016}
          className="max-w-none w-[2486px]"
        />
      </div>
      <div className="wrapper flex items-center gap-[240px]">
        <div className="max-w-[520px]">
          <p className="mb-[30px]">
            In terms of typography, we opted for a more futuristic look, with
            sharp edges and elegant feel.
          </p>
          <p>
            The color palette became very light, predominantly pastel, all of
            which contributed significantly to a very spacious and light feel of
            the website. Additionally, we included various 3D elements with
            dozens of microinteractions that truly transport the user into a 0
            gravity look and feel.
          </p>
        </div>
        <Image
          src="/images/northprim2/phone.png"
          alt="Phone Mockup"
          width={455}
          height={870}
        />
      </div>
      <Image
        src="/images/northprim2/web1.webp"
        alt="Decorative object"
        width={440}
        height={380}
        className="absolute bottom-[0] left-[60px] z-[1]"
      />

      <Image
        src="/images/northprim2/path3.svg"
        alt="Decorative object"
        width={860}
        height={770}
        className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 z-[1]"
      />

      <Image
        src="/images/northprim2/path4.svg"
        alt="Decorative object"
        width={800}
        height={433}
        className="absolute bottom-[-100px] right-[160px] z-[1]"
      />
    </section>
  );
}
