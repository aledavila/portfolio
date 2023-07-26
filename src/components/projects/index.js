import { useState } from 'react';
import ProjectCard from './project-card'
import { projectsData } from './project-card/projects';
import { MdArrowBackIosNew, MdArrowForwardIos } from 'react-icons/md';

// export default function Projects() {
//   return (
//     // <div className='projects grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
//     //   <ProjectCard />
//     // </div>
//     <div className='lg:mt-12 duration-500 bg-[#423E4D] bg-opacity-100 shadow-xl rounded-xl 2xl:w-10/12  w-full  h-2/3 z-[40]'>
//       <div className='opacity-100 duration-300 embla_beanz__slide h-full'>hello</div>
//     </div>
//   )
// }

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    const index = activeIndex === 0 ? projectsData.length - 1 : activeIndex - 1;
    setActiveIndex(index);
  };

  const nextSlide = () => {
    const index = activeIndex === projectsData.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(index);
  };

  return (
    <div className="project--container relative lg:mt-12 duration-500 bg-opacity-100 shadow-xl rounded-xl 2xl:w-10/12 w-full h-full lg:h-2/3">
      <ProjectCard activeIndex={activeIndex} projectsData={projectsData} />
      <div className="absolute top-1/2 lg:left-0 -left-4 transform -translate-y-1/2">
        <button
          className="text-4xl text-gray-500 hover:text-gray-800 transition-colors duration-500"
          onClick={prevSlide}
        >
          <MdArrowBackIosNew />
        </button>
      </div>
      <div className="absolute top-1/2 lg:right-0 -right-4 transform -translate-y-1/2">
        <button
          className="text-4xl text-gray-500 hover:text-gray-800 transition-colors duration-500"
          onClick={nextSlide}
        >
          <MdArrowForwardIos />
        </button>
      </div>
    </div>
  );
};

export default Projects;
