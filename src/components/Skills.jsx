import { skills } from '../data/portfolioData';
import SectionHeader from './SectionHeader';
import FadeIn from './FadeIn';
import TagRow from './TagRow';
import './Skills.css';

export default function Skills() {
  return (
    <section id="skills">
      <SectionHeader label="02 — Skills" title="Technical Expertise" />
      <div className="skills-grid">
        {skills.map((skill, i) => (
          <FadeIn key={skill.title} delay={i * 60}>
            <div className="skill-card">
              <div className="skill-icon">{skill.icon}</div>
              <h3>{skill.title}</h3>
              <p>{skill.description}</p>
              <TagRow tags={skill.tags} />
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
