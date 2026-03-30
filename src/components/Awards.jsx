import { awards } from '../data/portfolioData';
import SectionHeader from './SectionHeader';
import FadeIn from './FadeIn';
import './Awards.css';

export default function Awards() {
  return (
    <section id="awards">
      <SectionHeader label="05 — Awards" title="Achievements" />
      <div className="awards-list">
        {awards.map((award, i) => (
          <FadeIn key={i} delay={i * 40}>
            <div className="award-item">
              <span className="award-year">{award.year}</span>
              <span className="award-text">{award.text}</span>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
