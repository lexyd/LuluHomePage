import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import GitHubContributions from "../components/projects/GitHubContributions";
import ProjectListItem from "../components/projects/ProjectListItem";
import SectionHeading from "../components/projects/SectionHeading";
import {
  activeCaseStudySlugs,
  additionalProjects,
  allProjects,
  featuredProjects,
  projectGroups,
} from "../data/projects";
import "./ProjectsPage.css";

type PersonalProject = {
  title: string;
  description: string;
  url: string;
  external?: boolean;
  avatar?: string;
  avatarAlt?: string;
};

const personalProjects: PersonalProject[] = [
  {
    title: "TLDR Books",
    description:
      "Key insights from best-selling nonfiction books, designed for faster reading and listening.",
    url: "https://tldrbook.app/",
    external: true,
    avatar: "/images/tldr-books-avatar.png",
    avatarAlt: "TLDR Books app icon",
  },
  {
    title: "Deska",
    description:
      "A pre-owned device marketplace for buying quality used phones and selling devices with ease.",
    url: "https://deskatech.com/app",
    external: true,
    avatar: "/images/deska-avatar.svg",
    avatarAlt: "Deska device marketplace icon",
  },
];

const PersonalProjectList = ({ projects }: { projects: PersonalProject[] }) => (
  <div className="personal-project-list">
    {projects.map((project) => {
      const externalProps = project.external
        ? { target: "_blank", rel: "noreferrer" }
        : {};

      return (
        <a
          className="personal-project-item"
          href={project.url}
          key={project.url}
          {...externalProps}
        >
        {project.avatar ? (
          <span className="personal-project-avatar" aria-hidden="true">
            <img src={project.avatar} alt="" />
          </span>
        ) : null}
        <span className="personal-project-copy">
          <span className="personal-project-title">{project.title}</span>
          <span className="personal-project-description">
            {project.description}
          </span>
        </span>
        </a>
      );
    })}
  </div>
);

const ProjectsPage = () => {
  const isActiveCaseStudy = (slug: string) =>
    activeCaseStudySlugs.some((activeSlug) => activeSlug === slug);
  const selectedWorkProjects = [
    ...featuredProjects.filter((project) => isActiveCaseStudy(project.slug)),
    ...additionalProjects.filter(
      (project) => isActiveCaseStudy(project.slug)
    ),
  ];
  const selectedWorkSlugs = new Set(
    selectedWorkProjects.map((project) => project.slug)
  );

  return (
    <>
      <Navigation />
      <main className="projects-page">
        <section className="projects-featured" aria-labelledby="featured-work">
          <div className="projects-work-rail">
            <SectionHeading
              title="Selected Work"
              description="Products, systems, and AI experiences I've designed or built and love."
            />
            <div className="featured-project-grid">
              {selectedWorkProjects.map((project) => (
                <ProjectListItem key={project.slug} project={project} selected />
              ))}
            </div>
          </div>
        </section>

        <section className="project-groups" aria-label="Project categories">
          <div className="projects-work-rail">
            {projectGroups
              .filter((group) => group !== "Systems & Design Engineering")
              .map((group) => {
                const projects = allProjects.filter(
                  (project) =>
                    project.group === group && !selectedWorkSlugs.has(project.slug)
                );
                const isPersonal = group === "Personal Projects";

                return (
                  <section key={group} className="project-group">
                    <SectionHeading title={group} />
                    {isPersonal ? (
                      <>
                        <PersonalProjectList projects={personalProjects} />
                        <GitHubContributions />
                      </>
                    ) : (
                      <div className="project-list">
                        {projects.map((project) => (
                          <ProjectListItem
                            key={project.slug}
                            project={project}
                          />
                        ))}
                      </div>
                    )}
                  </section>
                );
              })}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ProjectsPage;
