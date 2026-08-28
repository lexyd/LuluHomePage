import { Link } from "react-router-dom";
import { ArrowRightIcon } from "../icons/StandardIcons";
import type { Project } from "../../data/projects";
import ProjectMeta from "./ProjectMeta";
import ProjectVisual from "./ProjectVisual";

type ProjectListItemProps = {
  project: Project;
  compact?: boolean;
  selected?: boolean;
};

const ProjectListItem = ({
  project,
  compact = false,
  selected = false,
}: ProjectListItemProps) => {
  const projectPath = project.detail
    ? `/projects/${project.slug}`
    : `/projects#${project.slug}`;
  const className = `project-list-item ${
    selected ? "project-list-item--selected" : ""
  } ${compact ? "project-list-item--compact" : ""} ${
    project.comingSoon ? "project-list-item--coming-soon" : ""
  } project-list-item--${project.slug}`;
  const metaCompany =
    project.company ??
    project.detail?.company ??
    project.category.split("·")[0].trim();
  const content = (
    <>
      <div className="project-list-image" aria-hidden={compact}>
        <ProjectVisual project={project} />
      </div>
      <div className="project-list-copy">
        <ProjectMeta company={metaCompany} />
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        {project.comingSoon ? (
          <span className="project-status">Coming soon</span>
        ) : null}
        {selected && !project.comingSoon ? (
          <span className="project-cta project-card-cta">
            {project.externalUrl ? "Open project" : "Read case study"}
            <ArrowRightIcon className="project-cta-icon" />
          </span>
        ) : null}
      </div>
      {project.comingSoon || selected ? null : (
        <span className="project-arrow" aria-hidden="true">
          <ArrowRightIcon className="project-arrow-icon" />
        </span>
      )}
    </>
  );

  if (project.comingSoon) {
    return (
      <article id={project.slug} className={className} aria-label={`${project.title} coming soon`}>
        {content}
      </article>
    );
  }

  if (project.externalUrl) {
    return (
      <a
        id={project.slug}
        className={className}
        href={project.externalUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={`Open ${project.title}`}
      >
        {content}
      </a>
    );
  }

  return (
    <Link
      id={project.slug}
      className={className}
      to={projectPath}
      aria-label={`View ${project.title} project`}
    >
      {content}
    </Link>
  );
};

export default ProjectListItem;
