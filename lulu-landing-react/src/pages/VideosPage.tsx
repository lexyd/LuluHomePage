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
import { writtenResources, type WrittenResource } from "../data/portfolioResources";
import "./VideosPage.css";

type ActiveCategory = "All" | VideoCategory;

const ResourceCard = ({ resource }: { resource: WrittenResource }) => (
  <a
    className="resource-card"
    href={resource.href}
    target="_blank"
    rel="noreferrer"
    aria-label={`Open resource: ${resource.title}`}
  >
    <span className="projects-eyebrow">
      {resource.category} · {resource.source}
    </span>
    <span className="resource-card-title">{resource.title}</span>
    <span className="resource-card-description">{resource.description}</span>
    <span className="video-card-action">
      Open resource
      <ExternalLinkIcon className="video-action-icon" />
    </span>
  </a>
);

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
              <p className="projects-eyebrow">Resources</p>
              <h1 id="latest-videos-title">Writing & Videos</h1>
              <p>
                Articles, tutorials, and older resources on design systems,
                Figma, AI, and product design.
              </p>
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

        <section className="written-resources" aria-labelledby="written-resources-title">
          <div className="videos-rail">
            <div className="videos-section-header">
              <h2 id="written-resources-title">Written Articles</h2>
            </div>
            <div className="resource-grid">
              {writtenResources.map((resource) => (
                <ResourceCard key={resource.href} resource={resource} />
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
