type ProjectMetaProps = {
  category: string;
  year: string;
};

const ProjectMeta = ({ category, year }: ProjectMetaProps) => {
  return (
    <div className="project-meta">
      <span>{category}</span>
      <span aria-hidden="true">·</span>
      <span>{year}</span>
    </div>
  );
};

export default ProjectMeta;
