import React from 'react';
import { GraduationCap } from 'lucide-react'; // Or from 'react-icons/fi'
import Reveal from '../common/Reveal';
import { EDUCATION } from '../../data/education';

// ✅ Make sure this is a default export
const Education = () => {
  return (
    <section id="education" className="section">
      <Reveal>
        <h2 className="section-title mono">05 · education</h2>
        <h3 className="section-heading">Education</h3>
      </Reveal>
      {EDUCATION.map((edu, index) => (
        <Reveal key={index} delay={index * 100}>
          <div className="timeline-item">
            <div className="org">{edu.institution}</div>
            <div className="role">{edu.degree} · {edu.period}</div>
            <p className="prose" style={{ marginTop: '4px', fontSize: '14px' }}>
              {edu.description}
            </p>
          </div>
        </Reveal>
      ))}
    </section>
  );
};

// ✅ This is the important part - default export
export default Education;