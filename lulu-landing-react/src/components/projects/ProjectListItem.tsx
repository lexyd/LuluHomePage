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

  return (
    <Link
      id={project.slug}
      className={`project-list-item ${
        selected ? "project-list-item--selected" : ""
      } ${compact ? "project-list-item--compact" : ""}`}
      to={projectPath}
      aria-label={`View ${project.title} project`}
    >
      <div className="project-list-image" aria-hidden={compact}>
        <ProjectVisual project={project} />
      </div>
      <div className="project-list-copy">
        <ProjectMeta category={project.category} year={project.year} />
        <h3>{project.title}</h3>
        <p>{project.description}</p>
      </div>
      <span className="project-arrow" aria-hidden="true">
        <ArrowRightIcon className="project-arrow-icon" />
      </span>
    </Link>
  );
};

export default ProjectListItem;
