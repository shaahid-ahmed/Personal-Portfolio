import { useState, useEffect } from 'react';
import { data } from '@/data/content';

export function useGithubProjects() {
  const [projects, setProjects] = useState(data.projects);

  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch('https://api.github.com/users/shaahid-ahmed/repos');
        const repos = await res.json();
        
        const mergedProjects = data.projects.map(localProj => {
          const remoteRepo = repos.find(r => r.name === localProj.id);
          if (remoteRepo) {
             return {
               ...localProj,
               stars: remoteRepo.stargazers_count,
               liveUrl: localProj.liveUrl || remoteRepo.homepage || null
             };
          }
          return localProj;
        });
        
        setProjects(mergedProjects);
      } catch (error) {
        console.error("Failed to fetch Github data", error);
      }
    }
    fetchRepos();
  }, []);

  return projects;
}