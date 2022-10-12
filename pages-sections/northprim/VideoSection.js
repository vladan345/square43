import React from "react";

function VideoSection() {
  return (
    <div
      className="VideoSection"
      style={{ height: 600, background: "#202020" }}
    >
      <video
        width="1920"
        autoPlay
        muted
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      >
        <source src="/images/northprim/S43_Astro_Video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default VideoSection;
