import "./VideoPlayer.scss";
import ReactPlayer from "react-player/file";
import video from "../../../../assets/video.mp4";

function VideoPlayer() {
  return (
    <div className="expander__section expander__section--video-player">
      <ReactPlayer
        playsInline
        playing
        muted
        width={"100%"}
        height={"100%"}
        controls
        url={video}
      />
      <h2 className="video-player__heading">
        MEGANE E-TECH 100% <br />
        ELECTRIC
      </h2>
    </div>
  );
}

export default VideoPlayer;
