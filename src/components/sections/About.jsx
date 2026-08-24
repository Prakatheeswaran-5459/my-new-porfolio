import Reveal from '../common/Reveal';

export default function About({ profile }) {
  return (
    <section id="about" data-section-id="about" className="section">
      <Reveal>
        <h2 className="section-title mono">02 · about.md</h2>
        <h3 className="section-heading">About Me</h3>
        <p className="prose">{profile.summary}</p>
      </Reveal>
    </section>
  );
}