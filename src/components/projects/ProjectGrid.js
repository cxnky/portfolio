import Image from 'next/image';
import Link from 'next/link';

const ProjectCard = ({ title, description, imageUrl, technologies, liveUrl, githubUrl }) => (
  <div className="flex flex-col bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden 
                  transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl">
    <div className="relative h-48 w-full">
      <Image
        src={imageUrl}
        alt={title}
        fill
        className="object-contain p-4 transition-transform duration-300 ease-in-out group-hover:scale-105"
      />
    </div>
    <div className="p-6 flex flex-col flex-1">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span 
            key={index}
            className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 rounded-full"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="flex gap-4">
        {liveUrl && (
          <Link 
            href={liveUrl}
            className="text-blue-600 dark:text-blue-400 hover:underline transition-colors duration-200"
            target="_blank"
          >
            View Website →
          </Link>
        )}
        {githubUrl && (
          <Link 
            href={githubUrl}
            className="text-gray-600 dark:text-gray-400 hover:underline transition-colors duration-200"
            target="_blank"
          >
            GitHub →
          </Link>
        )}
      </div>
    </div>
  </div>
);

export default function ProjectGrid({ projects }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
} 