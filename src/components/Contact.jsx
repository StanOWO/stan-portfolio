import { personalInfo } from '../data/portfolioData';
import SectionHeader from './SectionHeader';
import FadeIn from './FadeIn';
import './Contact.css';

export default function Contact() {
  const { email, github, githubHandle, location } = personalInfo;

  const cards = [
    {
      icon: '✉️',
      label: 'Email',
      value: email,
      href: `mailto:${email}`,
    },
    {
      icon: '🐙',
      label: 'GitHub',
      value: githubHandle,
      href: github,
      external: true,
    },
    {
      icon: '📍',
      label: 'Location',
      value: location,
    },
  ];

  return (
    <section id="contact">
      <SectionHeader label="07 — Contact" title="Let's Connect" />
      <div className="contact-grid">
        {cards.map((card, i) => (
          <FadeIn key={card.label} delay={i * 80}>
            {card.href ? (
              <a
                href={card.href}
                target={card.external ? '_blank' : undefined}
                rel={card.external ? 'noreferrer' : undefined}
                className="contact-card"
              >
                <div className="contact-icon">{card.icon}</div>
                <div className="contact-label">{card.label}</div>
                <div className="contact-value">{card.value}</div>
              </a>
            ) : (
              <div className="contact-card">
                <div className="contact-icon">{card.icon}</div>
                <div className="contact-label">{card.label}</div>
                <div className="contact-value">{card.value}</div>
              </div>
            )}
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
