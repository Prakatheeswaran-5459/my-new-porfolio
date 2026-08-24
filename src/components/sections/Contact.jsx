import { FiMail } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Reveal from '../common/Reveal';
import WindowDots from '../common/WindowDots';

export default function Contact({ profile }) {
  return (
    <section id="contact" data-section-id="contact" className="section">
      <Reveal>
        <h2 className="section-title mono">06 · contact.sh</h2>
        <h3 className="section-heading">Let's Connect</h3>

        <div className="terminal">
          <div className="terminal-header mono">
            <WindowDots />
            <span style={{ marginLeft: 8 }}>bash — contact</span>
          </div>
          <div className="terminal-body mono">
            <div><span className="prompt">prakathees@portfolio</span>:<span className="path">~</span>$ cat contact.txt</div>
            <div className="contact-links">
              <a className="contact-link" href={`mailto:${profile?.email || 'your.email@example.com'}`}>
                <FiMail size={16} /> {profile?.email || 'your.email@example.com'}
              </a>
              <a className="contact-link" href={profile?.github || '#'} target="_blank" rel="noreferrer">
                <FaGithub size={16} /> https://github.com/Prakatheeswaran-5459
              </a>
              <a className="contact-link" href={profile?.linkedin || '#'} target="_blank" rel="noreferrer">
                <FaLinkedin size={16} /> https://www.linkedin.com/in/prakatheeswaran/
              </a>
            </div>
            <div style={{ marginTop: 10, color: 'var(--text-dim)' }}>
              <span className="prompt">prakathees@portfolio</span>:<span className="path">~</span>$ <span className="cursor-blink" />
            </div>
          </div>
        </div>
        <p style={{ fontSize: 12, color: 'var(--text-dim)', marginTop: 14 }}>
          * Swap the email, GitHub, and LinkedIn values in the PROFILE object with your real links.
        </p>
      </Reveal>
    </section>
  );
}