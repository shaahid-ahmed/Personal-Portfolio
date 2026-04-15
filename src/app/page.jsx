"use client";
import { useState } from 'react';
import { data } from '@/data/content';
import { useGithubProjects } from '@/hooks/useGithubProjects';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import TimelineItem from '@/components/TimelineItem';
import ProjectCard from '@/components/ProjectCard';
import FilterBar from '@/components/FilterBar';
import HackathonCard from '@/components/HackathonCard';
import SkillBadge from '@/components/SkillBadge';
import PublicationCard from '@/components/PublicationCard';

export default function Home() {
  const allProjects = useGithubProjects();
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All' 
    ? allProjects 
    : allProjects.filter(p => p.category === activeFilter);

  const projectCategories = ['All', ...new Set(data.projects.map(p => p.category))];

  return (
    <main className="flex min-h-screen flex-col items-center pb-24">
      <Hero data={data.personal} />

      <div className="max-w-5xl w-full px-6 flex flex-col gap-24">
        
        {/* EDUCATION */}
        <Section id="education" title="Education">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.education.map((edu, idx) => (
              <div key={idx} className="bg-surface p-6 border-l-2 border-ocean/20 hover:border-ocean transition-colors">
                <h3 className="font-display font-bold text-xl">{edu.degree}</h3>
                <p className="text-ocean font-mono text-sm mt-1 mb-3">{edu.institution}</p>
                <p className="text-cool text-sm">{edu.specialization}</p>
                <p className="text-cool font-mono text-xs mt-4">{edu.date}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* EXPERIENCE */}
        <Section id="experience" title="Work Experience">
          <div className="space-y-6">
            {data.experience.map((exp, idx) => (
              <TimelineItem key={idx} item={exp} />
            ))}
          </div>
        </Section>

        {/* RESEARCH */}
        <Section id="research" title="Research">
          <div className="space-y-6">
            {data.research.map((res, idx) => (
              <TimelineItem key={idx} item={res} />
            ))}
          </div>
        </Section>

        {/* TEACHING */}
        <Section id="teaching" title="Teaching">
          <div className="space-y-6">
            {data.teaching.map((teach, idx) => (
              <TimelineItem key={idx} item={teach} />
            ))}
          </div>
        </Section>

        {/* PROJECTS */}
        <Section id="projects" title="Projects">
          <FilterBar 
            categories={projectCategories} 
            activeFilter={activeFilter} 
            setActiveFilter={setActiveFilter} 
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </Section>

        {/* HACKATHONS */}
        <Section id="hackathons" title="Hackathons">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.hackathons.map((hack, idx) => (
              <HackathonCard key={idx} hackathon={hack} />
            ))}
          </div>
        </Section>

      {/* PUBLICATIONS */}
<Section id="publications" title="Publications">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {data.publications.map((pub, index) => (
      <PublicationCard key={index} pub={pub} />
    ))}
  </div>
</Section>

        {/* SKILLS */}
        <Section id="skills" title="Technical Skills">
          <div className="space-y-8">
            <div>
              <h4 className="font-mono text-ocean text-sm mb-4">Languages</h4>
              <div className="flex flex-wrap gap-3">
                {data.skills.languages.map(skill => <SkillBadge key={skill} skill={skill} />)}
              </div>
            </div>
            <div>
              <h4 className="font-mono text-ocean text-sm mb-4">ML & Data</h4>
              <div className="flex flex-wrap gap-3">
                {data.skills.ml.map(skill => <SkillBadge key={skill} skill={skill} />)}
              </div>
            </div>
            <div>
              <h4 className="font-mono text-ocean text-sm mb-4">Tools & Platforms</h4>
              <div className="flex flex-wrap gap-3">
                {data.skills.tools.map(skill => <SkillBadge key={skill} skill={skill} />)}
              </div>
            </div>
          </div>
        </Section>

        {/* CONTACT */}
        <Section id="contact" title="Contact">
          <div className="bg-surface p-8 text-center border border-ocean/20">
            <h3 className="font-display text-3xl mb-4">Ready to build?</h3>
            <p className="text-cool mb-8 max-w-lg mx-auto">
              I am currently open to new opportunities in software engineering, machine learning, and quantitative research.
            </p>
            <a href={`mailto:${data.personal.email}`} className="inline-block bg-ocean/10 text-seafoam border border-ocean hover:bg-ocean hover:text-navy transition-colors px-8 py-3 font-mono text-sm font-bold">
              GET IN TOUCH
            </a>
          </div>
        </Section>

      </div>
    </main>
  );
}