import ProjectCard from './project-card'

export default function Projects() {
  return (
    <div className='projects grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
      <ProjectCard />
    </div>
  )
}