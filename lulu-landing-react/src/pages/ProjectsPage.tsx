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
            <GitHubContributions />
          </div>
        </section>

        <section className="project-groups" aria-label="Project categories">
          <div className="projects-work-rail">
            {projectGroups.map((group) => {
              const projects = additionalProjects.filter(
                (project) => project.group === group
              );
              const isCompact = group === "Experiments";

              return (
                <section key={group} className="project-group">
                  <SectionHeading title={group} />
                  <div
                    className={
                      isCompact
                        ? "project-list project-list--compact"
                        : "project-list"
                    }
                  >
                    {projects.map((project) => (
                      <ProjectListItem
                        key={project.slug}
                        project={project}
                        compact={isCompact}
                      />
                    ))}
                  </div>
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
