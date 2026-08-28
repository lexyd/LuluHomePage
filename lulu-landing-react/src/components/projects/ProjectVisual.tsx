import type { Project } from "../../data/projects";
import ProjectPlaceholderIcon from "../icons/ProjectPlaceholderIcon";
import ProjectCarouselPreview from "./ProjectCarouselPreview";

type ProjectVisualProps = {
  project: Project;
};

const ProjectVisual = ({ project }: ProjectVisualProps) => {
  if (project.slug === "immersive-product-carousel") {
    return <ProjectCarouselPreview />;
  }

  const heroVisual = project.detail?.heroVisual;

  if (heroVisual?.image) {
    return (
      <img
        className={heroVisual.fit ? `project-visual-media--${heroVisual.fit}` : undefined}
        src={heroVisual.image}
        alt={heroVisual.imageAlt}
      />
    );
  }

  if (project.image) {
    return <img src={project.image} alt={project.imageAlt} />;
  }

  return (
    <div className="project-visual-placeholder" role="img" aria-label={project.imageAlt}>
      <span className="project-placeholder-symbol">
        <ProjectPlaceholderIcon />
      </span>
      <strong>{project.visualLabel}</strong>
    </div>
  );
};

export default ProjectVisual;
