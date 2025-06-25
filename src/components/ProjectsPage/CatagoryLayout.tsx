'use client';

import { useState } from 'react';
import { Heart, X } from 'react-feather';
import type { Project } from '../../utils/interfaces';
import { mockProjects } from '../../utils/mockProjects';

interface Props {
  category: string;
}

function mapMockToProject(mock: any, category: string): Project {
  return {
    id: String(mock.id),
    title: mock.title,
    thumbnail_url: mock.image,
    category,
    description: 'No description provided.',
    created_at: '2024-01-01',
    assets: [mock.image],
  };
}

export default function CategoryLayout({ category }: Props) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [liked, setLiked] = useState<Record<string, boolean>>({});

  const projects: Project[] = mockProjects
    .filter((p) => p.link.includes(`/projects/${category.toLowerCase()}`))
    .map((p) => mapMockToProject(p, category));

  const toggleLike = (id: string) => {
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="p-4">
      <h2 className="text-2xl font-bold mb-6">{category}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative group cursor-pointer border rounded overflow-hidden shadow hover:shadow-lg transition"
            onClick={() => setSelectedProject(project)}
          >
            {/* First Asset Preview */}
            <img
              src={project.assets?.[0]}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-2">
              <p className="font-semibold text-sm">{project.title}</p>
              <button
                className="absolute top-2 right-2 z-10 bg-white/80 rounded-full p-1 hover:scale-110 transition"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleLike(project.id);
                }}
              >
                <Heart
                  size={18}
                  fill={liked[project.id] ? 'red' : 'none'}
                  color={liked[project.id] ? 'red' : 'black'}
                />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Overlay Popup for Details */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/70 z-50 flex justify-center items-center p-4">
          <div className="bg-white dark:bg-dark-bg max-w-3xl w-full rounded-lg shadow-lg p-6 overflow-y-auto max-h-[90vh] relative">
            <button
              className="absolute top-3 right-3 text-xl text-black dark:text-white hover:scale-125 transition"
              onClick={() => setSelectedProject(null)}
            >
              <X />
            </button>

            <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">
              <strong>Category:</strong> {selectedProject.category}
            </p>
            <p className="text-gray-800 dark:text-gray-200 mb-4">
              {selectedProject.description || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {selectedProject.assets?.map((url, i) => (
                <img
                  key={i}
                  src={url}
                  alt={`Asset ${i}`}
                  className="w-full h-40 object-cover rounded-lg"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
