import { courses } from '../data/portfolioData';
import SectionHeader from './SectionHeader';
import FadeIn from './FadeIn';
import './Courses.css';

function CourseCategory({ title, items }) {
  return (
    <div className="course-category">
      <h3>{title}</h3>
      <ul className="course-list">
        {items.map((c) => (
          <li key={c.name}>
            <span>{c.name}</span>
            <span className="grade">{c.grade}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Courses() {
  return (
    <section id="courses">
      <SectionHeader label="06 — Coursework" title="Selected Courses" />
      <div className="courses-cols">
        <FadeIn>
          <CourseCategory {...courses.aiSecurity} />
        </FadeIn>
        <FadeIn delay={100}>
          <CourseCategory {...courses.edaIc} />
        </FadeIn>
      </div>
    </section>
  );
}
