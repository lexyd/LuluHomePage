import { Link, Navigate, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import { ArrowRightIcon } from "../components/icons/StandardIcons";
import Navigation from "../components/Navigation";
import ProjectMeta from "../components/projects/ProjectMeta";
import type { Project, ProjectDetailMedia } from "../data/projects";
import { allProjects } from "../data/projects";
import "./ProjectDetailPage.css";

const getProjectPath = (project: Project) =>
  project.detail ? `/projects/${project.slug}` : `/projects#${project.slug}`;

const DetailMedia = ({
  media,
  className = "",
}: {
  media: ProjectDetailMedia;
  className?: string;
}) => {
  return (
    <figure className={`project-detail-media ${className}`}>
      <div className="project-detail-media-frame">
        {media.image ? (
          <img src={media.image} alt={media.imageAlt} />
        ) : (
          <div
            className="project-detail-placeholder"
            role="img"
            aria-label={media.imageAlt}
          >
            <div className="project-detail-placeholder-bars">
              <span />
              <span />
              <span />
            </div>
            <div className="project-detail-placeholder-grid">
              <span />
              <span />
              <span />
              <span />
            </div>
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

  if (!project?.detail) {
    return <Navigate to="/projects" replace />;
  }

  const { detail } = project;
  const nextProject =
    allProjects.find((item) => item.slug === detail.nextProjectSlug) ??
    allProjects.find((item) => item.slug !== project.slug);

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
              <ProjectMeta category={detail.eyebrow} year={project.year} />
              <h1>{project.title}</h1>
              <p>{detail.summary}</p>
            </div>
            <dl className="project-detail-meta" aria-label="Project details">
              <div>
                <dt>Role</dt>
                <dd>{detail.role}</dd>
              </div>
              <div>
                <dt>Company</dt>
                <dd>{detail.company}</dd>
              </div>
              <div>
                <dt>Scope</dt>
                <dd>{detail.scope}</dd>
              </div>
              <div>
                <dt>Year</dt>
                <dd>{project.year}</dd>
              </div>
            </dl>
          </header>

          <DetailMedia media={detail.heroVisual} className="project-detail-hero-media" />

          <section className="project-detail-proof" aria-label="Proof points">
            {detail.proofPoints.map((point) => (
              <div key={point.label} className="project-detail-proof-item">
                {point.value ? <strong>{point.value}</strong> : null}
                <h2>{point.label}</h2>
                <p>{point.description}</p>
              </div>
            ))}
          </section>

          <section className="project-detail-overview" aria-labelledby="project-overview">
            <p className="projects-eyebrow">Overview</p>
            <div>
              <h2 id="project-overview">{detail.overview.heading}</h2>
              {detail.overview.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          <section className="project-detail-ownership" aria-labelledby="project-ownership">
            <p className="projects-eyebrow">What I owned</p>
            <ul id="project-ownership">
              {detail.ownership.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <div className="project-detail-story">
            {detail.sections.map((section) => (
              <section
                key={section.title}
                className={`project-detail-story-section project-detail-story-section--${section.layout}`}
              >
                <div className="project-detail-story-copy">
                  <h2>{section.title}</h2>
                  {section.statement ? <p>{section.statement}</p> : null}
                  {section.paragraphs?.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
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

          {detail.reflection ? (
            <section className="project-detail-reflection" aria-labelledby="project-reflection">
              <p className="projects-eyebrow">What I learned</p>
              <p id="project-reflection">{detail.reflection}</p>
            </section>
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
