import { SiGithub } from 'react-icons/si';
import { SlLink } from 'react-icons/sl';

export default function ProjectCard({ activeIndex, projectsData }) {
  return (
    <>
      {projectsData.map((project, index) => (
        <div
          key={project.id}
          className={`absolute w-full h-full ${
            activeIndex === index ? 'opacity-100 block' : 'opacity-0 hidden'
          } transition-opacity duration-500`}
        >
          <div className='grid lg:grid-cols-2 grid-cols-1 h-full'>
            <div className='flex items-center justify-center'>
              <img
                className='w-5/6 h-5/6 object-contain'
                src={project.src}
                alt={project.name}
              />
            </div>
            <div className='flex lg:pr-24 px-6 lg:justify-center flex-col'>
              <h3 className='project-title text-3xl mb-4'>{project.name}</h3>
              {project.desc && <p className='project-desc text-sm mb-4'>{project.desc}</p>}
              <div className='tech-stack'>
                {project.techStack.map((tech, index) => (
                  <span key={index} className='inline-block bg-transparent/10 rounded px-2 py-1 text-xs font-bold mr-2'>
                    {tech}
                  </span>
                ))}
              </div>
              <div className='flex flex-row mt-4 gap-3'>
                <a href={project.url} title='Project Link' className='flex w-fit'>
                  <SlLink aria-hidden='true' focusable='false' />
                  <span class="sr-only">{`${project.name} Link`}</span>
                </a>
                {project.github && 
                  <a href={project.github} title='Project Github' className='flex w-fit'>
                    <SiGithub aria-hidden='true' focusable='false' />
                    <span class="sr-only">{`${project.name} Github`}</span>
                  </a>
                }
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
