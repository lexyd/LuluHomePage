import { useEffect, useRef, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import HeroCarousel from "../components/HeroCarousel";
import { ArrowRightIcon } from "../components/icons/StandardIcons";
import ProjectPlaceholderIcon from "../components/icons/ProjectPlaceholderIcon";
import Navigation from "../components/Navigation";
import CarouselInteractionDemo from "../components/projects/CarouselInteractionDemo";
import type { Project, ProjectDetailMedia } from "../data/projects";
import { activeCaseStudySlugs, allProjects } from "../data/projects";
import "./ProjectDetailPage.css";

const getProjectPath = (project: Project) =>
  project.detail ? `/projects/${project.slug}` : `/projects#${project.slug}`;

const isActiveCaseStudy = (project: Project) =>
  activeCaseStudySlugs.some((activeSlug) => activeSlug === project.slug);

const DetailMedia = ({
  media,
  className = "",
}: {
  media: ProjectDetailMedia;
  className?: string;
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [mediaFailed, setMediaFailed] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);

    handleChange();
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      videoRef.current?.pause();
    }
  }, [prefersReducedMotion]);

  const fitClass = media.fit ? ` project-detail-media--${media.fit}` : "";
  const carouselDemoType =
    media.component === "carousel-transition-demo"
      ? "transition"
      : media.component === "carousel-pagination-demo"
        ? "pagination"
        : media.component === "carousel-playback-demo"
          ? "playback"
          : media.component === "carousel-controls-demo"
            ? "controls"
            : null;

  return (
    <figure className={`project-detail-media${fitClass} ${className}`}>
      <div className="project-detail-media-frame">
        {media.component === "hero-carousel" ? (
          <HeroCarousel
            variant={className.includes("project-detail-hero-media") ? "project-hero" : "project-demo"}
            showHeader={false}
            showInfo={false}
          />
        ) : carouselDemoType ? (
          <CarouselInteractionDemo type={carouselDemoType} />
        ) : media.video && !mediaFailed ? (
          <video
            ref={videoRef}
            src={media.video}
            poster={media.poster}
            autoPlay={!prefersReducedMotion}
            muted
            loop
            playsInline
            aria-label={media.imageAlt}
            onError={() => setMediaFailed(true)}
          />
        ) : media.image || media.poster ? (
          <img src={media.image ?? media.poster} alt={media.imageAlt} />
        ) : (
          <div
            className="project-detail-placeholder"
            role="img"
            aria-label={media.imageAlt}
          >
            <span className="project-detail-placeholder-symbol">
              <ProjectPlaceholderIcon />
            </span>
            <strong>{media.visualLabel}</strong>
          </div>
        )}
      </div>
      {media.caption ? <figcaption>{media.caption}</figcaption> : null}
    </figure>
  );
};

const ProjectDetailPage = () => {
  const { slug } = useParams();
  const project = allProjects.find((item) => item.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  if (project.comingSoon) {
    return (
      <>
        <Navigation />
        <main className="project-detail-page">
          <article className="project-detail-rail">
            <header className="project-detail-header">
              <nav className="project-detail-breadcrumb" aria-label="Breadcrumb">
                <ol>
                  <li>
                    <Link to="/projects">Projects</Link>
                  </li>
                  <li aria-current="page">{project.title}</li>
                </ol>
              </nav>
              <div className="project-detail-intro">
                <h1>{project.title}</h1>
              </div>
            </header>

            <section className="project-detail-coming-soon" aria-label="Coming soon">
              <p>This case study is coming soon.</p>
              <Link to="/projects">Back to projects</Link>
            </section>
          </article>
        </main>
        <Footer />
      </>
    );
  }

  if (!isActiveCaseStudy(project)) {
    return <Navigate to="/projects" replace />;
  }

  if (!project.detail) {
    return <Navigate to="/projects" replace />;
  }

  const { detail } = project;
  const metaItems =
    detail.customMeta ?? [
      {
        label: detail.metaLabels?.role ?? "Role",
        value: detail.role,
      },
      {
        label: detail.metaLabels?.company ?? "Company",
        value: detail.company,
      },
      {
        label: detail.metaLabels?.scope ?? "Scope",
        value: detail.scope,
      },
      {
        label: detail.metaLabels?.year ?? "Year",
        value: project.year,
      },
    ].filter((item) => item.value);
  const activeProjects = allProjects.filter(isActiveCaseStudy);
  const nextProject =
    activeProjects.find((item) => item.slug === detail.nextProjectSlug) ??
    activeProjects.find((item) => item.slug !== project.slug);

  return (
    <>
      <Navigation />
      <main className="project-detail-page">
        <article className="project-detail-rail">
          <header className="project-detail-header">
            <nav className="project-detail-breadcrumb" aria-label="Breadcrumb">
              <ol>
                <li>
                  <Link to="/projects">Projects</Link>
                </li>
                <li aria-current="page">{project.title}</li>
              </ol>
            </nav>
            <div className="project-detail-intro">
              <h1>{project.title}</h1>
              <p>{detail.summary}</p>
            </div>
            <dl className="project-detail-meta" aria-label="Project details">
              {metaItems.map((item) => (
                <div key={item.label}>
                  <dt>{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          </header>

          <DetailMedia media={detail.heroVisual} className="project-detail-hero-media" />

          {detail.proofPoints.length ? (
            <section className="project-detail-proof" aria-label="Proof points">
              {detail.proofPoints.map((point) => (
                <div key={point.label} className="project-detail-proof-item">
                  {point.value ? <strong>{point.value}</strong> : null}
                  <h2>{point.label}</h2>
                  <p>{point.description}</p>
                </div>
              ))}
            </section>
          ) : null}

          <section
            className={`project-detail-overview${detail.overview.label ? "" : " project-detail-overview--plain"}`}
            aria-label={detail.overview.heading ? undefined : detail.overview.label || "Context"}
            aria-labelledby={detail.overview.heading ? "project-overview" : undefined}
          >
            {detail.overview.label ? (
              <p className="projects-eyebrow">{detail.overview.label}</p>
            ) : null}
            <div>
              {detail.overview.heading ? (
                <h2 id="project-overview">{detail.overview.heading}</h2>
              ) : null}
              {detail.overview.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          {detail.ownership.length ? (
            <section className="project-detail-ownership" aria-labelledby="project-ownership">
              <p className="projects-eyebrow">What I owned</p>
              <ul id="project-ownership">
                {detail.ownership.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          ) : null}

          <div className="project-detail-story">
            {detail.sections.map((section) => (
              <section
                key={section.title}
                className={`project-detail-story-section project-detail-story-section--${section.layout} project-detail-story-section--${project.slug}`}
              >
                <div className="project-detail-story-copy">
                  <h2>{section.title}</h2>
                  {section.statement ? <p>{section.statement}</p> : null}
                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                  {section.flow ? (
                    <ol className="project-detail-flow" aria-label={`${section.title} flow`}>
                      {section.flow.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ol>
                  ) : null}
                </div>
                <div className="project-detail-story-media">
                  {section.media.map((media) => (
                    <div key={`${section.title}-${media.visualLabel}`}>
                      {media.title ? <p className="projects-eyebrow">{media.title}</p> : null}
                      <DetailMedia media={media} />
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {detail.outcomes.length ? (
            <section className="project-detail-outcomes" aria-labelledby="project-outcomes">
              <p className="projects-eyebrow">What changed</p>
              <div className="project-detail-outcome-grid" id="project-outcomes">
                {detail.outcomes.map((outcome) => (
                  <div key={outcome.title}>
                    <h2>{outcome.title}</h2>
                    <p>{outcome.description}</p>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          {detail.reflection ? (
            <section className="project-detail-reflection" aria-labelledby="project-reflection">
              <p className="projects-eyebrow">What I learned</p>
              <p id="project-reflection">{detail.reflection}</p>
            </section>
          ) : null}

          {detail.closingStatement ? (
            <blockquote className="project-detail-closing">
              {detail.closingStatement}
            </blockquote>
          ) : null}

          {nextProject ? (
            <Link className="project-detail-next" to={getProjectPath(nextProject)}>
              <span>
                <span className="projects-eyebrow">Next project</span>
                <strong>{nextProject.title}</strong>
                <span>{nextProject.description}</span>
              </span>
              <span className="project-arrow" aria-hidden="true">
                <ArrowRightIcon className="project-arrow-icon" />
              </span>
            </Link>
          ) : null}
        </article>
      </main>
      <Footer />
    </>
  );
};

export default ProjectDetailPage;
