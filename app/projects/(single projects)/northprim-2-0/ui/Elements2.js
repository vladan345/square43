import Image from "next/image";
export default function Elements2() {
  return (
    <section className="Elements2 relative pt-[200px] md:pt-[100px]">
      <div className="absolute left-1/2 top-[70%] z-[0] flex w-screen -translate-x-1/2 -translate-y-1/2 justify-center overflow-hidden md:top-[60%]">
        <Image
          src="/images/northprim2/blur3.webp"
          alt="Decorative background"
          width={2289}
          height={1827}
          className="w-[2289px] max-w-none md:max-w-[1800px]"
        />
      </div>
      <div className="wrapper relative z-[1]">
        <div className="topWrap flex items-center gap-[180px] md:flex-col md:items-end md:gap-[40px]">
          <p className="max-w-[520px]">
            At the very beginning of this creative process, before moving to 3D
            modeling, we set off on a quest for inspiration. The essence of the
            brand lay in the words change and evolution, so the 3D narrative
            needed to follow suit. Each 3D room was to represent a different
            stage in the evolution of both human existence and discovery: from
            the Big Bang and the industrial revolution, to the concept of
            Artificial Intelligence and its abstract, limitless possibilities.
            Eventually, an entire story board was developed and we embarked on a
            journey of actual production.
          </p>
          <Image
            src="/images/northprim2/n.webp"
            alt="Decorative object"
            width={436}
            height={445}
            className="float2 xl:max-w-[330px] md:max-w-[220px]"
          />
        </div>
        <div className="coneWrap mt-[120px] flex xl:gap-[120px] md:mt-[80px] md:flex-col-reverse md:gap-[40px]">
          <div className="w-1/2 md:flex md:w-full md:justify-center">
            <div className="relative flex max-w-[600px] justify-center pb-[150px] md:w-full md:max-w-[300px]">
              <Image
                src="/images/northprim2/cone.webp"
                alt="Cone object"
                width={435}
                height={485}
                className="float3 relative z-[1] xl:max-w-[300px] md:max-w-[216px]"
              />
              <Image
                src="/images/northprim2/ico.webp"
                alt="Icosphere object"
                width={222}
                height={222}
                className="float2 absolute bottom-0 right-[40px] xl:max-w-[160px] md:bottom-[80px] md:right-[0] md:max-w-[111px]"
              />
              <Image
                src="/images/northprim2/triangles.webp"
                alt="Triangles object"
                width={285}
                height={247}
                className="float3 absolute bottom-[40px] left-0 z-[2] xl:max-w-[200px] md:bottom-[80px] md:max-w-[142px]"
              />
              <Image
                src="/images/northprim2/bowl.webp"
                alt="Bowl object"
                width={247}
                height={268}
                className="float3 absolute right-0 top-[100px] xl:max-w-[170px] md:right-[-30px] md:max-w-[123px]"
              />

              <div className="absolute left-[20px] top-1/2 -translate-y-1/2 md:top-[40%]">
                <Image
                  src="/images/northprim2/marble.webp"
                  alt="Ball object"
                  width={137}
                  height={140}
                  className="float2 xl:max-w-[100px] md:max-w-[70px]"
                />
              </div>
            </div>
          </div>
          <div className="flex w-1/2 items-center justify-end md:w-full">
            <p className="max-w-[520px]">
              Even the choice of materials was planned carefully, dominated by
              glassy, crystalline and transparent textures that added to the
              abstract, futuristic atmosphere of the website.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 md:hidden">
          <div className="absolute bottom-[30px] left-[40px] w-[145px] max-w-none -translate-x-full translate-y-full">
            <Image
              src="/images/northprim2/pipe1.webp"
              alt="Decorative object"
              width={145}
              height={175}
              className="float"
            />
          </div>
          <Image
            src="/images/northprim2/pipe2.webp"
            alt="Decorative object"
            width={228}
            height={183}
            className="float4"
          />
        </div>
      </div>
    </section>
  );
}
