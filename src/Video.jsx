import React, { useState } from "react";
import ReactPlayer from "react-player";

export const VideoJS = (props) => {
  const [muted, setMuted] = useState(true);

  return (
    <>
    <button type="button" onClick={() => setMuted(false)}>
      MUTED2
    </button>
    <ReactPlayer
    playing={true}
    muted={muted}
      config={{
        file: {
          forceHLS: true,
        },
      }}
      url="https://customer-z72edo18smrscr35.cloudflarestream.com/c56a82d71d29137a68514157ff1d736f/manifest/video.m3u8"
    />
    </>
  );
};

export default VideoJS;
