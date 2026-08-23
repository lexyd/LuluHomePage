type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

const SectionHeading = ({ eyebrow, title, description }: SectionHeadingProps) => {
  return (
    <div className="projects-section-heading">
      {eyebrow && <p className="projects-eyebrow">{eyebrow}</p>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
};

export default SectionHeading;
