import ProjectCard from './project-card'
import { projectsData } from './project-card/projects';

const Projects = () => {
  return (
    <div className="lg:mt-12">
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
