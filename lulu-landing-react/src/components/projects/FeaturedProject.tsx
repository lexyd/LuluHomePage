import { Link } from "react-router-dom";
import { ArrowRightIcon } from "../icons/StandardIcons";
import type { Project } from "../../data/projects";
import ProjectMeta from "./ProjectMeta";
import ProjectVisual from "./ProjectVisual";

type FeaturedProjectProps = {
  project: Project;
  index: number;
};

const FeaturedProject = ({ project, index }: FeaturedProjectProps) => {
  const projectPath = project.detail
    ? `/projects/${project.slug}`
    : `/projects#${project.slug}`;
  const metaCompany =
    project.company ??
    project.detail?.company ??
    project.category.split("·")[0].trim();

  const className = `featured-project ${
    index === 0 ? "featured-project--wide" : ""
  }`;
  const content = (
    <>
      <div className="featured-project-image">
        <ProjectVisual project={project} />
      </div>
      <div className="featured-project-copy">
        <div>
          <ProjectMeta company={metaCompany} />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
        <span className="project-cta">
          {project.externalUrl ? "Open project" : "Read case study"}
          <ArrowRightIcon className="project-cta-icon" />
        </span>
      </div>
    </>
  );

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

export default FeaturedProject;
