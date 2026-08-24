import { FiCheckCircle, FiAward } from 'react-icons/fi';
import Reveal from '../common/Reveal';
import { EXPERIENCE } from '../../data/experience';
import { CERTIFICATIONS } from '../../data/certifications';

export default function Experience() {
  return (
    <section id="experience" data-section-id="experience" className="section">
      <Reveal>
        <h2 className="section-title mono">04 · experience.js</h2>
        <h3 className="section-heading">Experience</h3>
      </Reveal>
      {EXPERIENCE.map((exp) => (
        <Reveal key={exp.org}>
          <div className="timeline-item">
            <div className="org">{exp.org}</div>
            <div className="role">{exp.title} · {exp.period}</div>
            <ul className="point-list">
              {exp.points.map((pt, i) => (
                <li key={i}>
                  <FiCheckCircle size={15} />
                  <span>{pt}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}

      <Reveal delay={100}>
        <h2 className="section-title mono" style={{ marginTop: 36 }}>certifications.txt</h2>
        <div className="cert-row">
          {CERTIFICATIONS.map((c) => (
            <div className="cert-card" key={c.name}>
              <div className="cert-badge"><FiAward size={17} /></div>
              <div>
                <div className="cert-name">{c.name}</div>
                <div className="cert-issuer">{c.issuer}</div>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}