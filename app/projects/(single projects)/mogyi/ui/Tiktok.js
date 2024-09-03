import Image from "next/image";

export default function Tiktok() {
  return (
    <section className="Tiktok">
      <div className="wrapper flex videoWrap md:flex-col md:items-center md:overflow-hidden">
        <div className="w-1/2 flex flex-col justify-center md:w-full pr-[120px] md:pr-0 xl:pr-[40px] md:mb-[80px]">
          <h2 className="!mb-[60px] md:!mb-[40px]">TikTok</h2>
          <p>
            There is no denying that TikTok is the most influential platform and
            the fastest way to reach our client's target audience.
          </p>
          <p className="my-[30px]">
            However, unlike social media management for Instagram, Facebook and
            LinkedIN, TikTok doesn't leave much room for planning per se - you
            need to be there and keep up with the latest trending formats, audio
            and features, all of which change on a weekly basis or less!
          </p>
          <p>
            We opened Mogyi's first ever TikTok account that is now home to many
            home-made tiktoks that have definitely made a noted entrance on the
            platform.
          </p>
        </div>
        <div className="w-1/2 relative video md:w-full sm:w-[130vw]">
          <Image
            src="/images/mogyi/tv2.webp"
            alt="Tv frame"
            width={720}
            height={930}
            className="relative z-[1]"
          />
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute w-full h-full top-0 left-0 px-[26.5%] translate-y-[-30px]"
          >
            <source src="/images/mogyi/tiktoks.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
