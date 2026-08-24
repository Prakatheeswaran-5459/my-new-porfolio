import { FiFile, FiExternalLink } from 'react-icons/fi';  // ✅ FiFile instead of FiFileCode
import { FaGithub } from 'react-icons/fa';
import Reveal from '../common/Reveal';
import { PROJECTS } from '../../data/projects';

export default function Projects() {
  return (
    <section id="projects" data-section-id="projects" className="section">
      <Reveal>
        <h2 className="section-title mono">05 · projects</h2>
        <h3 className="section-heading">Projects</h3>
      </Reveal>
      <div className="project-grid">
        {PROJECTS.map((p, i) => (
          <Reveal key={p.file} delay={i * 100}>
            <div className="project-card">
              <div className="project-file-header mono">
                <FiFile size={13} /> {p.file}
              </div>
              <div className="project-body">
                <div className="project-title">{p.title}</div>
                <div className="project-desc">{p.description}</div>
                <div className="stack-row">
                  {p.stack.map((s) => (
                    <span className="stack-pill" key={s}>{s}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={p.github} target="_blank" rel="noreferrer">
                    <FaGithub size={14} /> Code
                  </a>
                  <a href={p.demo} target="_blank" rel="noreferrer">
                    <FiExternalLink size={14} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}