import { ArrowRightIcon, PlayIcon } from "../icons/StandardIcons";
import {
  getYoutubeThumbnail,
  getYoutubeUrl,
  type PortfolioVideo,
} from "../../data/videos";

type VideoThumbnailProps = {
  video: PortfolioVideo;
};

const VideoThumbnail = ({ video }: VideoThumbnailProps) => {
  return (
    <div className="video-thumbnail">
      <img
        src={getYoutubeThumbnail(video.youtubeId)}
        alt={`Thumbnail for ${video.title}`}
        loading="lazy"
      />
      <span className="video-play-indicator" aria-hidden="true">
        <PlayIcon />
      </span>
      <span className="video-source-label">YouTube</span>
    </div>
  );
};

export const FeaturedVideoCard = ({ video }: VideoThumbnailProps) => {
  return (
    <a
      className="featured-video-card"
      href={getYoutubeUrl(video.youtubeId)}
      target="_blank"
      rel="noreferrer"
      aria-label={`Watch featured video: ${video.title}`}
    >
      <VideoThumbnail video={video} />
      <div className="featured-video-copy">
        <p className="projects-eyebrow">Featured Video</p>
        <h2>{video.title}</h2>
        <p>
          A selected video from the channel on design, systems, AI, and building
          better digital products.
        </p>
        <span className="video-card-action">
          Watch video
          <ArrowRightIcon className="video-action-icon" />
        </span>
      </div>
    </a>
  );
};

export const VideoCard = ({ video }: VideoThumbnailProps) => {
  return (
    <a
      className="video-card"
      href={getYoutubeUrl(video.youtubeId)}
      target="_blank"
      rel="noreferrer"
      aria-label={`Watch video: ${video.title}`}
    >
      <VideoThumbnail video={video} />
      <div className="video-card-copy">
        <p className="projects-eyebrow">{video.category}</p>
        <h3>{video.title}</h3>
        <span className="video-card-action">
          Watch
          <ArrowRightIcon className="video-action-icon" />
        </span>
      </div>
    </a>
  );
};

export default VideoThumbnail;
