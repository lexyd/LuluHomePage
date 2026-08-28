type ProjectMetaProps = {
  company: string;
};

const ProjectMeta = ({ company }: ProjectMetaProps) => {
  return (
    <div className="project-meta">
      <span>{company}</span>
    </div>
  );
};

export default ProjectMeta;
