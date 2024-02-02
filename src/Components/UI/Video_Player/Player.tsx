import React, { useRef, useEffect } from "react";
import Plyr from "plyr";
import "./Player.scss";

const VideoPlayer: React.FC<{ src: string,sub:string }> = ({ src ,sub}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      const player = new Plyr(videoRef.current,{
        controls: [
          "play-large",
          "play",
          "progress",
          "current-time",
          "mute",
          "volume",
          "captions",
          "settings",
          "pip",
          "airplay",
          "disableContextMenu",
          'captions',
        ],
      });
      return () => player.destroy();
    }
  }, []);

  return (
            <video ref={videoRef} controls className="video-container">
        <source src={src} type="video/mp4" />
        <track
          src={sub}
          kind="captions"
          srcLang="en"
          label="English"
          default
        />
      </video>
  );
};

export default VideoPlayer;