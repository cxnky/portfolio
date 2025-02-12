"use client";

import Image from 'next/image';
import TechBadge from '../ui/TechBadge';
import { calculateDuration, formatDate } from '@/utils/date';

export default function ExperienceTimeline({ experiences }) {
  return (
    <div className="relative">
      {/* Single clean vertical line */}
      <div className="absolute left-[50%] md:left-[120px] w-0.5 h-full bg-blue-500 
        dark:bg-blue-400 transform -translate-x-[0.5px]" />

      <div className="space-y-16">
        {experiences.map((experience, index) => (
          <div 
            key={index} 
            className="relative group"
          >
            {/* Original dot with outer ring */}
            <div className="absolute left-[50%] md:left-[120px] w-4 h-4 rounded-full 
              bg-blue-500 dark:bg-blue-400 transform -translate-x-1/2 ring-4 
              ring-blue-500/20 dark:ring-blue-400/20" />

            {/* Content card */}
            <div className={`relative ml-[50%] md:ml-[160px] pl-8 ${
              index === experiences.length - 1 ? '' : 'pb-16'
            }`}>
              {/* Date text */}
              <div className="absolute left-[-200px] hidden md:block w-[120px] text-right 
                text-gray-600 dark:text-gray-400 font-mono">
                {formatDate(experience.startDate)}
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg 
                border border-gray-100 dark:border-gray-700 hover:shadow-xl 
                transition-shadow duration-300">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Company Logo */}
                  <div className="flex-shrink-0">
                    <div className="relative w-16 h-16 md:w-40 md:h-40 flex items-center justify-center">
                      <Image
                        src={experience.logo}
                        alt={`${experience.company} logo`}
                        width={140}
                        height={140}
                        className="!object-contain"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {experience.role}
                    </h3>
                    <h4 className="text-lg text-blue-500 dark:text-blue-400 mb-2">
                      {experience.company}
                    </h4>
                    
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-4 md:hidden">
                      {formatDate(experience.startDate)} - {formatDate(experience.endDate)}
                    </div>
                    
                    <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      {calculateDuration(experience.startDate, experience.endDate)}
                    </div>
                    
                    <div className="text-gray-700 dark:text-gray-300 mb-4 space-y-2">
                      {Array.isArray(experience.description) ? (
                        experience.description.map((desc, i) => (
                          <p key={i}>{desc}</p>
                        ))
                      ) : (
                        <p>{experience.description}</p>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <TechBadge key={techIndex} name={tech} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Present Day Marker */}
        <div className="relative">
          <div className="absolute left-[50%] md:left-[120px] w-4 h-4 rounded-full 
            bg-blue-500 dark:bg-blue-400 transform -translate-x-1/2 ring-4 
            ring-blue-500/20 dark:ring-blue-400/20" />
          
          <div className="ml-[50%] md:ml-[160px] pl-8">
            <div className="text-blue-500 dark:text-blue-400 font-mono text-sm">
              Present Day
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 