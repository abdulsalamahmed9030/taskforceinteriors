"use client";
import { useState } from 'react';
import Image from 'next/image';

const projects = [
  {
    name: 'MARKFED-GUNTUR',
    cover: '/projects/markfed-cover.jpg',
    images: [
      '/projects/markfed-1.jpg',
      '/projects/markfed-2.jpg',
      '/projects/markfed-3.jpg',
      '/projects/markfed-4.jpg',
      '/projects/markfed-5.jpg',
      '/projects/markfed-6.jpg',
      
    ],
  },
  {
    name: 'GHMC-NORTHZONE',
    cover: '/projects/ghmc.jpg',
    images: ['/projects/ghmc-1.jpg', '/projects/ghmc-2.jpg'],
  },
  
  // Add more projects here
];

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  return (
    <div className="w-full p-4">
      {/* Scrollable Projects Row */}
      <div className="flex overflow-x-auto gap-4 pb-4">
        {projects.map((project) => (
          <div
            key={project.name}
            className="relative cursor-pointer flex-shrink-0 rounded overflow-hidden"
            onClick={() => setSelectedProject(project.name)}
          >
            <Image
              src={project.cover}
              alt={project.name}
              width={300}
              height={200}
              className="object-cover rounded h-[200px] w-auto"
            />
            <div className="absolute bottom-0 w-full bg-black bg-opacity-80 text-white text-sm font-bold text-center py-1">
              {project.name}
            </div>
          </div>
        ))}
      </div>

      {/* Display Images of Selected Project */}
      {selectedProject && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {projects
            .find((proj) => proj.name === selectedProject)
            ?.images.map((img, idx) => (
              <div key={idx} className="relative rounded overflow-hidden">
                <Image
                  src={img}
                  alt={`${selectedProject} image ${idx + 1}`}
                  width={300}
                  height={200}
                  className="object-cover rounded w-full h-auto"
                />
                <div className="absolute bottom-0 w-full bg-black bg-opacity-80 text-white text-xs text-center py-1">
                  {selectedProject}
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
