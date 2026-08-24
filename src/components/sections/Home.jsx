import { FiFolder, FiMail } from 'react-icons/fi';
import WindowDots from '../common/WindowDots';

export default function Home({ profile, scrollTo }) {
  // Use profile data with fallbacks
  const name = profile?.name || 'Prakathees';
  const role = profile?.role || 'MERN Stack Developer';
  const location = profile?.location || 'Chennai, India';
  const status = profile?.status || 'Open to work';

  // The code to display
  const codeLines = [
    'const developer = {',
    `  name: '${name}',`,
    `  role: '${role}',`,
    `  base: '${location}',`,
    `  stack: ['MongoDB', 'Express', 'React', 'Node', 'React JS','My Sql'],`,
    `  status: '${status}',`,
    '};',
    '',
    'export default developer;',
  ];

  return (
    <section id="home" data-section-id="home" className="section">
      <div className="eyebrow mono">
        <span className="line-numbers">01</span>
        <span className="comment">{'// welcome to my portfolio'}</span>
      </div>
      
      {/* Display profile name */}
      <h1 className="hero-name">{name}</h1>
      <p className="hero-role mono">&gt; {role} · {location}</p>

      <div className="code-block">
        <div className="code-block-header">
          <WindowDots />
          <span className="mono" style={{ fontSize: 12, color: 'var(--text-dim)', marginLeft: 8 }}>developer.js</span>
        </div>
        <div className="code-block-body mono">
          {codeLines.map((line, idx) => (
            <div key={idx}>
              {line}
              {idx === codeLines.length - 1 && <span className="cursor-blink" />}
            </div>
          ))}
        </div>
      </div>

      <div className="cta-row">
        <button className="btn btn-primary" onClick={() => scrollTo('projects')}>
          <FiFolder size={15} /> View Projects
        </button>
        <button className="btn btn-ghost" onClick={() => scrollTo('contact')}>
          <FiMail size={15} /> Get in Touch
        </button>
      </div>
    </section>
  );
}