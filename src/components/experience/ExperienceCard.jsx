import Image from "next/image";
import TechBadge from "../ui/TechBadge";
import { calculateDuration, formatDate } from "@/utils/date";

export default function ExperienceCard({ experience, isLast }) {
  const { company, role, startDate, endDate, logo, description, technologies, url } = experience;
  
  return (
    <div className="relative group">
      {!isLast && (
        <div className="absolute left-[2.4rem] top-[4rem] w-0.5 h-[calc(100%+3rem)] 
          bg-gradient-to-b from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 
          group-hover:from-blue-500 group-hover:to-teal-500 transition-colors duration-300" />
      )}
      
      <div className="flex gap-6 p-6 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm 
        shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-[1.02] 
        border border-gray-100 dark:border-gray-700 hover:border-blue-500/20 dark:hover:border-blue-500/20">
        <a href={url} target="_blank" rel="noopener noreferrer" 
          className="flex-shrink-0 w-40 h-40 relative flex items-center justify-center transition-transform duration-300 ease-in-out 
            group-hover:scale-110">
          <Image
            src={logo}
            alt={`${company} logo`}
            width={140}
            height={140}
            className="!object-contain transition-transform duration-300 ease-in-out"
          />
        </a>
        
        <div className="flex-grow">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-500 
            dark:group-hover:text-blue-400 transition-colors duration-300 ease-in-out">
            {role}
          </h3>
          <h4 className="text-lg text-blue-500 dark:text-blue-400 mb-2 hover:text-blue-600 
            dark:hover:text-blue-300 transition-colors duration-300 ease-in-out">
            <a href={url} target="_blank" rel="noopener noreferrer">
              {company}
            </a>
          </h4>
          
          <div className="text-sm text-gray-600 dark:text-gray-300 mb-3">
            {formatDate(startDate)} - {formatDate(endDate)} · {calculateDuration(startDate, endDate)}
          </div>
          
          <div className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
            {Array.isArray(description) ? (
              description.map((desc, i) => (
                <p key={i} className="mb-2 last:mb-0">{desc}</p>
              ))
            ) : (
              <p>{description}</p>
            )}
          </div>
          
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <TechBadge key={index} name={tech} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}