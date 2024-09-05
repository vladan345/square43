import Image from "next/image";

export default function WebDev() {
  return (
    <section className="WebDev relative mt-[60px] overflow-x-clip md:pb-[220px]">
      <div className="wrapper relative z-[1] md:!px-0">
        <h2 className="!mb-[40px] md:mx-[20px]">Web Development</h2>
        <p className="max-w-[520px] md:mx-[20px]">
          This was our Studio's very first encounter with building a 3D section
          on a website from scratch.
        </p>
        <div className="videoWrap relative mt-[80px] md:mt-[60px]">
          <video autoPlay muted loop playsInline className="w-full">
            <source src="/images/northprim2/video2.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="mt-[120px] flex gap-[120px] md:mt-[60px] md:flex-col md:gap-[60px] md:px-[20px]">
          <p className="max-w-[520px]">
            To create the custom 3D elements for the website, our team utilized
            industry-leading 3D modeling software - Blender. This powerful tool
            allowed us to craft intricate models, apply realistic textures, and
            configure complex animations. Each 3D asset was meticulously
            designed to ensure that it not only looked stunning but also
            performed well on the web, without overwhelming the loading time and
            overall performance.
          </p>
          <p className="max-w-[520px]">
            The real magic happened when we integrated these 3D elements into
            the website using Three.js. Three.js is a cross-browser JavaScript
            library and API used to create and display animated 3D computer
            graphics in a web browser. It simplifies the process of
            incorporating 3D models, making it accessible even for projects that
            require high levels of interactivity and realism.
          </p>
        </div>
      </div>
      <Image
        src="/images/northprim2/blur5.webp"
        alt="Decorative background"
        width={936}
        height={1692}
        className="absolute left-0 top-[60%] w-[936px] max-w-none -translate-y-1/2 md:top-[50%] md:max-w-[700px]"
      />
    </section>
  );
}
