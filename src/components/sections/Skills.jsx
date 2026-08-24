import Reveal from '../common/Reveal';
import { SKILLS, GROUP_COLOR } from '../../data/skills';

export default function Skills() {
  return (
    <section id="skills" data-section-id="skills" className="section">
      <Reveal>
        <h2 className="section-title mono">03 · skills.json</h2>
        <h3 className="section-heading">Skills &amp; Tools</h3>
      </Reveal>
      <div className="skills-grid">
        {SKILLS.map((skill, i) => (
          <Reveal key={skill.name} delay={i * 40}>
            <span className="skill-chip">
              <span className="skill-dot" style={{ background: GROUP_COLOR[skill.group] }} />
              {skill.name}
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}