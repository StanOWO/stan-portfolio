import { aboutParagraphs, infoCards } from '../data/portfolioData';
import SectionHeader from './SectionHeader';
import FadeIn from './FadeIn';
import './About.css';

export default function About() {
  return (
    <section id="about">
      <SectionHeader label="01 — About Me" title="Self-Introduction" />
      <div className="about-content">
        <FadeIn className="about-text">
          {aboutParagraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </FadeIn>

        <FadeIn>
          <div className="info-grid">
            {infoCards.map(({ label, value }) => (
              <div className="info-card" key={label}>
                <div className="label">{label}</div>
                <div className="value">{value}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
