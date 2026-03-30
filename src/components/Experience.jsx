import { experiences } from '../data/portfolioData';
import SectionHeader from './SectionHeader';
import FadeIn from './FadeIn';
import './Experience.css';

export default function Experience() {
  return (
    <section id="experience">
      <SectionHeader label="03 — Experience" title="Education & Work" />
      <div className="timeline">
        {experiences.map((exp, i) => (
          <FadeIn key={i}>
            <div className="timeline-item">
              <div className="timeline-date">{exp.date}</div>
              <h3>{exp.title}</h3>
              <div className="org">{exp.org}</div>
              <p>{exp.description}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
