import { personalInfo } from '../data/portfolioData';
import './Hero.css';

export default function Hero() {
  const { name, chineseName, tagline, subtitle, github } = personalInfo;

  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-tag">{tagline}</div>
        <h1>
          Hi, I'm <span className="highlight">{name}</span>
          <br />
          {chineseName}
        </h1>
        <p className="hero-subtitle">{subtitle}</p>

        <div className="hero-links">
          <a href="#contact" className="btn btn-primary">
            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M4 4h16v16H4z" />
              <path d="M22 6l-10 7L2 6" />
            </svg>
            Get in Touch
          </a>
          <a href={github} target="_blank" rel="noreferrer" className="btn btn-outline">
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.73.083-.73 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22v3.293c0 .319.216.694.825.577C20.565 21.795 24 17.295 24 12 24 5.37 18.63 0 12 0z" />
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
