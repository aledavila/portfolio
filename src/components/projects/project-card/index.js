import { SiGithub } from 'react-icons/si';
import { SlLink } from 'react-icons/sl';

export default function ProjectCard({ project }) {
  return (
    <div className="project--container shadow-xl rounded-xl p-6 h-full">
      <div className='flex flex-col h-full'>
        <div className='flex items-center justify-center mb-6'>
          <img
            className='w-full h-48 object-cover rounded-lg'
            src={project.src}
            alt={project.name}
          />
        </div>
        <div className='flex flex-col flex-grow'>
          <h3 className='project-title elegant text-2xl mb-3'>{project.name}</h3>
          {project.desc && <p className='project-desc text-sm mb-4 flex-grow'>{project.desc}</p>}
          <div className='tech-stack mb-4'>
            {project.techStack.map((tech, index) => (
              <span key={index} className='inline-block bg-white/20 rounded px-2 py-1 text-xs font-bold mr-2 mb-2'>
                {tech}
              </span>
            ))}
          </div>
          <div className='flex flex-row gap-4 mt-auto'>
            <a href={project.url} title='Project Link' className='flex items-center gap-2 text-lg transition-colors duration-300'>
              <SlLink aria-hidden='true' focusable='false' />
              <span className="text-sm">View Project</span>
            </a>
            {project.github && 
              <a href={project.github} title='Project Github' className='flex items-center gap-2 text-lg transition-colors duration-300'>
                <SiGithub aria-hidden='true' focusable='false' />
                <span className="text-sm">GitHub</span>
              </a>
            }
          </div>
        </div>
      </div>
    </div>
  )
}
