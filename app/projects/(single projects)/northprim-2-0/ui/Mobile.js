import Image from "next/image";

export default function Mobile() {
  return (
    <section className="Mobile relative z-[0] overflow-x-clip pb-[180px] pt-[100px] md:pt-[280px]">
      <Image
        src="/images/northprim2/triangles2.webp"
        alt="Decorative object"
        width={440}
        height={380}
        className="float2 absolute right-[-120px] top-[-100px] z-[1] max-w-[380px] md:right-[-10px] md:top-0 md:max-w-[220px]"
      />
      <div className="absolute left-1/2 top-1/2 z-[0] flex w-screen -translate-x-1/2 -translate-y-1/2 justify-start overflow-hidden md:justify-center">
        <Image
          src="/images/northprim2/blur4.webp"
          alt="Decorative background"
          width={2486}
          height={2016}
          className="w-[2486px] max-w-none md:mb-[300px] md:max-w-[2200px]"
        />
      </div>
      <div className="wrapper relative z-[2] flex items-center gap-[240px] xl:gap-[80px] md:flex-col">
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
        className="float3 absolute bottom-[0] left-[60px] z-[1] xl:max-w-[380px] md:max-w-[210px]"
      />

      <Image
        src="/images/northprim2/path3.svg"
        alt="Decorative object"
        width={860}
        height={770}
        className="absolute bottom-[-100px] left-1/2 z-[1] -translate-x-1/2 md:bottom-auto md:top-[20%] md:max-w-[430px]"
      />

      <Image
        src="/images/northprim2/path4.svg"
        alt="Decorative object"
        width={800}
        height={433}
        className="absolute bottom-[-100px] right-[160px] z-[1] md:bottom-auto md:right-[-100px] md:top-[23%] md:max-w-[400px]"
      />
    </section>
  );
}
