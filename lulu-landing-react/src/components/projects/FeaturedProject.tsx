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

  return (
    <Link
      id={project.slug}
      className={`featured-project ${
        index === 0 ? "featured-project--wide" : ""
      }`}
      to={projectPath}
      aria-label={`View ${project.title} project`}
    >
      <div className="featured-project-image">
        <ProjectVisual project={project} />
      </div>
      <div className="featured-project-copy">
        <div>
          <ProjectMeta category={project.category} year={project.year} />
          <h3>{project.title}</h3>
          <p>{project.description}</p>
        </div>
        <span className="project-cta">
          View project
          <ArrowRightIcon className="project-cta-icon" />
        </span>
      </div>
    </Link>
  );
};

export default FeaturedProject;
