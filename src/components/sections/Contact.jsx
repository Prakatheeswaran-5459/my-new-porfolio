import { FiMail } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Reveal from '../common/Reveal';
import WindowDots from '../common/WindowDots';

export default function Contact({ profile }) {
  // Get the actual URLs from profile or use defaults
  const email = profile?.email || 'your.email@example.com';
  const githubUrl = profile?.github || 'https://github.com/your-username';
  const linkedinUrl = profile?.linkedin || 'https://linkedin.com/in/your-username';
  
  // Extract username from URL for display
  const githubUsername = githubUrl.replace('https://github.com/', '');
  const linkedinUsername = linkedinUrl.replace('https://www.linkedin.com/in/', '').replace('/', '');

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
              {/* Email - using mailto: */}
              <a className="contact-link" href={`mailto:${email}`}>
                <FiMail size={16} /> {email}
              </a>
              
              {/* GitHub - using the actual URL from profile */}
              <a className="contact-link" href={githubUrl} target="_blank" rel="noreferrer">
                <FaGithub size={16} /> {githubUsername}
              </a>
              
              {/* LinkedIn - using the actual URL from profile */}
              <a className="contact-link" href={linkedinUrl} target="_blank" rel="noreferrer">
                <FaLinkedin size={16} /> {linkedinUsername}
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