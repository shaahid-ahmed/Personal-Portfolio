"use client";

import { useMemo, useState } from 'react';
import { data } from '@/data/content';
import { useGithubProjects } from '@/hooks/useGithubProjects';
import Hero from '@/components/Hero';
import Section from '@/components/Section';
import Reveal from '@/components/Reveal';
import Card from '@/components/Card';
import TimelineItem from '@/components/TimelineItem';
import ProjectCard from '@/components/ProjectCard';
import FilterBar from '@/components/FilterBar';
import HackathonCard from '@/components/HackathonCard';
import SkillBadge from '@/components/SkillBadge';
import PublicationCard from '@/components/PublicationCard';

const skillGroups = [
  { key: 'languages', label: 'Languages' },
  { key: 'ml', label: 'ML & Data' },
  { key: 'tools', label: 'Tools & Platforms' }
];

export default function Home() {
  const allProjects = useGithubProjects();
  const [activeFilter, setActiveFilter] = useState('All');

  const projectCategories = useMemo(
    () => ['All', ...new Set(data.projects.map((p) => p.category))],
    []
  );

  const projectCounts = useMemo(() => {
    const counts = { All: data.projects.length };
    data.projects.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Featured work leads, so the grid has a clear entry point.
  const filteredProjects = useMemo(() => {
    const list =
      activeFilter === 'All'
        ? allProjects
        : allProjects.filter((p) => p.category === activeFilter);
    return [...list].sort((a, b) => Number(!!b.featured) - Number(!!a.featured));
  }, [allProjects, activeFilter]);

  return (
    <main className="flex min-h-screen flex-col items-center">
      <Hero data={data.personal} />

      <div className="flex w-full max-w-5xl flex-col gap-24 px-6 md:gap-32">
        {/* EDUCATION */}
        <Section id="education" index={1} title="Education">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {data.education.map((edu, idx) => (
              <Reveal key={idx} delay={idx * 90}>
                <Card className="h-full">
                  <p className="mb-4 font-mono text-xs text-muted">{edu.date}</p>
                  <h3 className="font-display text-xl font-bold leading-snug text-crisp transition-colors group-hover:text-ocean">
                    {edu.degree}
                  </h3>
                  <p className="mt-2 font-mono text-sm text-ocean">{edu.institution}</p>
                  <p className="mt-4 border-t border-ocean/10 pt-4 font-body text-sm leading-relaxed text-cool">
                    {edu.specialization}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* EXPERIENCE */}
        <Section id="experience" index={2} title="Work Experience">
          <div>
            {data.experience.map((exp, idx, arr) => (
              <Reveal key={idx} delay={idx * 90}>
                <TimelineItem item={exp} isLast={idx === arr.length - 1} />
              </Reveal>
            ))}
          </div>
        </Section>

        {/* RESEARCH */}
        <Section
          id="research"
          index={3}
          title="Research"
          kicker="Speech enhancement, combinatorial optimization, and applied machine learning."
        >
          <div>
            {data.research.map((res, idx, arr) => (
              <Reveal key={idx} delay={idx * 90}>
                <TimelineItem item={res} isLast={idx === arr.length - 1} />
              </Reveal>
            ))}
          </div>
        </Section>

        {/* TEACHING */}
        <Section id="teaching" index={4} title="Teaching">
          <div>
            {data.teaching.map((teach, idx, arr) => (
              <Reveal key={idx} delay={idx * 90}>
                <TimelineItem item={teach} isLast={idx === arr.length - 1} />
              </Reveal>
            ))}
          </div>
        </Section>

        {/* PROJECTS */}
        <Section id="projects" index={5} title="Projects">
          <Reveal>
            <FilterBar
              categories={projectCategories}
              activeFilter={activeFilter}
              setActiveFilter={setActiveFilter}
              counts={projectCounts}
            />
          </Reveal>
          <div key={activeFilter} className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {filteredProjects.map((project, idx) => (
              <Reveal key={project.id} delay={Math.min(idx, 5) * 80}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </Section>

        {/* HACKATHONS */}
        <Section id="hackathons" index={6} title="Hackathons">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {data.hackathons.map((hack, idx) => (
              <Reveal key={idx} delay={idx * 90}>
                <HackathonCard hackathon={hack} />
              </Reveal>
            ))}
          </div>
        </Section>

        {/* PUBLICATIONS */}
        <Section id="publications" index={7} title="Publications">
          <div className="grid grid-cols-1 gap-6">
            {data.publications.map((pub, index) => (
              <Reveal key={index} delay={index * 90}>
                <PublicationCard pub={pub} index={index} />
              </Reveal>
            ))}
          </div>
        </Section>

        {/* SKILLS */}
        <Section id="skills" index={8} title="Technical Skills">
          <div className="space-y-10">
            {skillGroups.map((group, idx) => (
              <Reveal key={group.key} delay={idx * 90}>
                <div className="flex flex-col gap-4 md:flex-row md:gap-8">
                  <h3 className="shrink-0 pt-2 font-mono text-sm text-ocean md:w-44">
                    {group.label}
                  </h3>
                  <div className="flex flex-wrap gap-2.5">
                    {data.skills[group.key].map((skill) => (
                      <SkillBadge key={skill} skill={skill} />
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* CONTACT */}
        <Section id="contact" index={9} title="Contact">
          <Reveal>
            <div className="relative overflow-hidden rounded-card border border-ocean/15 bg-gradient-to-br from-surface via-surface to-ocean/[0.06] p-10 text-center shadow-card md:p-14">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-seafoam/10 blur-3xl"
              />
              <div className="relative">
                <h3 className="font-display text-3xl font-bold text-crisp md:text-4xl">
                  Ready to build?
                </h3>
                <p className="mx-auto mt-4 max-w-lg font-body leading-relaxed text-cool">
                  I am currently open to new opportunities in software engineering, machine
                  learning, and quantitative research.
                </p>
                <a
                  href={`mailto:${data.personal.email}`}
                  className="mt-8 inline-flex items-center gap-2 rounded-pill bg-ocean px-8 py-3.5 font-mono text-sm font-medium text-white shadow-lift transition-all duration-300 ease-smooth hover:-translate-y-0.5 hover:bg-deep"
                >
                  Get in touch
                  <span aria-hidden="true">→</span>
                </a>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 font-mono text-xs text-muted">
                  <span>{data.personal.email}</span>
                  <span aria-hidden="true" className="hidden h-1 w-1 rounded-full bg-ocean/40 sm:block" />
                  <span>{data.personal.location}</span>
                </div>
              </div>
            </div>
          </Reveal>
        </Section>
      </div>

      <footer className="mt-24 w-full border-t border-ocean/10 py-8">
        <p className="text-center font-mono text-xs text-muted">
          Designed and built by {data.personal.name}
        </p>
      </footer>
    </main>
  );
}
