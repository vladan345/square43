import Image from "next/image";
export default function Elements2() {
  return (
    <section className="Elements2 pt-[200px] relative">
      <div className="flex justify-center absolute top-[70%] left-1/2 -translate-y-1/2 -translate-x-1/2 w-screen overflow-hidden z-[0]">
        <Image
          src="/images/northprim2/blur3.webp"
          alt="Decorative background"
          width={2289}
          height={1827}
          className="max-w-none w-[2289px]"
        />
      </div>
      <div className="wrapper relative z-[1]">
        <div className="flex topWrap items-center gap-[180px]">
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
          />
        </div>
        <div className="flex coneWrap mt-[120px]">
          <div className="w-1/2">
            <div className="relative max-w-[600px] pb-[150px] flex justify-center">
              <Image
                src="/images/northprim2/cone.webp"
                alt="Cone object"
                width={435}
                height={485}
                className="relative z-[1] float3 xl:max-w-[300px]"
              />
              <Image
                src="/images/northprim2/ico.webp"
                alt="Icosphere object"
                width={222}
                height={222}
                className="absolute bottom-0 right-[40px] float2 xl:max-w-[160px]"
              />
              <Image
                src="/images/northprim2/triangles.webp"
                alt="Triangles object"
                width={285}
                height={247}
                className="absolute bottom-[40px] left-0 z-[2] float3 xl:max-w-[200px]"
              />
              <Image
                src="/images/northprim2/bowl.webp"
                alt="Bowl object"
                width={247}
                height={268}
                className="absolute top-[100px] right-0 float3 xl:max-w-[170px]"
              />

              <div className="absolute top-1/2 -translate-y-1/2 left-[20px]">
                <Image
                  src="/images/northprim2/marble.webp"
                  alt="Ball object"
                  width={137}
                  height={140}
                  className="float2 xl:max-w-[100px]"
                />
              </div>
            </div>
          </div>
          <div className="w-1/2 flex justify-end items-center">
            <p className="max-w-[520px]">
              Even the choice of materials was planned carefully, dominated by
              glassy, crystalline and transparent textures that added to the
              abstract, futuristic atmosphere of the website.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 right-0">
          <Image
            src="/images/northprim2/pipe1.webp"
            alt="Decorative object"
            width={145}
            height={175}
            className="absolute bottom-[30px] left-[40px] -translate-x-full translate-y-full max-w-none w-[145px]"
          />
          <Image
            src="/images/northprim2/pipe2.webp"
            alt="Decorative object"
            width={228}
            height={183}
          />
        </div>
      </div>
    </section>
  );
}
