import { projects } from '../data/portfolioData';
import SectionHeader from './SectionHeader';
import FadeIn from './FadeIn';
import TagRow from './TagRow';
import './Projects.css';

export default function Projects() {
  return (
    <section id="projects">
      <SectionHeader label="04 — Projects" title="Featured Work" />
      <div className="projects-grid">
        {projects.map((proj, i) => (
          <FadeIn key={i} delay={i * 60}>
            <div className="project-card">
              <div className="project-year">{proj.year}</div>
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
              <TagRow tags={proj.tags} />
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
