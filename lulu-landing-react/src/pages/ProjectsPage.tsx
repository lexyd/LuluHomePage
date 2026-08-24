import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import FeaturedProject from "../components/projects/FeaturedProject";
import GitHubContributions from "../components/projects/GitHubContributions";
import ProjectListItem from "../components/projects/ProjectListItem";
import SectionHeading from "../components/projects/SectionHeading";
import {
  additionalProjects,
  featuredProjects,
  projectGroups,
} from "../data/projects";
import "./ProjectsPage.css";

type PersonalProject = {
  title: string;
  description: string;
  url: string;
};

const personalProjects: PersonalProject[] = [
  {
    title: "TLDR Books",
    description:
      "Key insights from best-selling nonfiction books, designed for faster reading and listening.",
    url: "https://tldrbook.app/",
  },
  {
    title: "CalyPad",
    description:
      "Bookings, reminders, and loyalty tools for health and beauty businesses.",
    url: "https://www.calypad.com/",
  },
  {
    title: "Deska",
    description: "A marketplace for buying quality used phones at auction prices.",
    url: "https://deskatech.com/app",
  },
];

const PersonalProjectList = ({ projects }: { projects: PersonalProject[] }) => (
  <div className="personal-project-list">
    {projects.map((project) => (
      <a
        className="personal-project-item"
        href={project.url}
        key={project.url}
        target="_blank"
        rel="noreferrer"
      >
        <span className="personal-project-title">{project.title}</span>
        <span className="personal-project-description">
          {project.description}
        </span>
      </a>
    ))}
  </div>
);

const ProjectsPage = () => {
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
              {featuredProjects.slice(0, 1).map((project, index) => (
                <FeaturedProject
                  key={project.slug}
                  project={project}
                  index={index}
                />
              ))}
              {featuredProjects.slice(1).map((project) => (
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
                const projects = additionalProjects.filter(
                  (project) => project.group === group
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
