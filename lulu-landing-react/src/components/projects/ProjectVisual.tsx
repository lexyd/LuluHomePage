import type { Project } from "../../data/projects";

type ProjectVisualProps = {
  project: Project;
};

const ProjectVisual = ({ project }: ProjectVisualProps) => {
  if (project.image) {
    return <img src={project.image} alt={project.imageAlt} />;
  }

  return (
    <div className="project-visual-placeholder" role="img" aria-label={project.imageAlt}>
      <div className="visual-bar">
        <span />
        <span />
        <span />
      </div>
      <div className="visual-grid">
        <span />
        <span />
        <span />
        <span />
      </div>
      <strong>{project.visualLabel}</strong>
    </div>
  );
};

export default ProjectVisual;
