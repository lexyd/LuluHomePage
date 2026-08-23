import { useMemo, useState } from "react";
import Footer from "../components/Footer";
import { ExternalLinkIcon } from "../components/icons/StandardIcons";
import Navigation from "../components/Navigation";
import { VideoCard } from "../components/videos/VideoThumbnail";
import {
  videoCategories,
  videos,
  youtubeChannelUrl,
  type VideoCategory,
} from "../data/videos";
import "./VideosPage.css";

type ActiveCategory = "All" | VideoCategory;

const VideosPage = () => {
  const [activeCategory, setActiveCategory] = useState<ActiveCategory>("All");

  const videoArticles = useMemo(
    () =>
      videos.filter((video) => {
        return activeCategory === "All" || video.category === activeCategory;
      }),
    [activeCategory]
  );

  return (
    <>
      <Navigation />
      <main className="videos-page">
        <section className="latest-videos" aria-labelledby="latest-videos-title">
          <div className="videos-rail">
            <div className="videos-section-header">
              <h1 id="latest-videos-title">Video Articles</h1>
              <div className="video-filters" aria-label="Filter videos by category">
                {videoCategories.map((category) => (
                  <button
                    key={category}
                    className={
                      activeCategory === category
                        ? "video-filter video-filter--active"
                        : "video-filter"
                    }
                    type="button"
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="video-grid">
              {videoArticles.map((video) => (
                <VideoCard key={video.youtubeId} video={video} />
              ))}
            </div>
          </div>
        </section>

        <section className="youtube-cta" aria-labelledby="youtube-cta-title">
          <div className="videos-rail">
            <div className="youtube-cta-panel">
              <div>
                <h2 id="youtube-cta-title">More on YouTube</h2>
                <p>
                  Tutorials, walkthroughs, experiments, and conversations about
                  designing and building digital products.
                </p>
              </div>
              <a
                className="videos-text-link"
                href={youtubeChannelUrl}
                target="_blank"
                rel="noreferrer"
              >
                View all videos
                <ExternalLinkIcon className="video-action-icon" />
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default VideosPage;
