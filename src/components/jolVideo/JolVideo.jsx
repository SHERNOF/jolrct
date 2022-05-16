import React from "react";

export default function JolVideo() {
  return (
    <div
      style={{
        overflow: "hidden",
        // paddingBottom: "56.25%",
        position: "relative",
        height: 0,
      }}
    >
      <iframe
        width="1200"
        height="1000"
        src="../video/JOL.mp4"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
}
