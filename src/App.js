import { useState, useRef, useCallback, useEffect } from 'react';
import { PROFILE } from './data/profile';
import TitleBar from './components/layout/TitleBar';
import Sidebar from './components/layout/Sidebar';
import TabBar from './components/layout/TabBar';
import StatusBar from './components/common/StatusBar';
import Home from './components/sections/Home';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Education from './components/sections/Education'; // ✅ New Education component
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import './styles/portfolio.css';

function App() {
  const [activeId, setActiveId] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);
  const sectionRefs = useRef({});

  // Log to verify PROFILE is loaded
  console.log('App - PROFILE:', PROFILE);

  const scrollTo = useCallback((id) => {
    const node = sectionRefs.current[id];
    if (node) node.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setMobileOpen(false);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.dataset.sectionId);
        });
      },
      { threshold: 0.35, rootMargin: '-80px 0px -40% 0px' }
    );
    Object.values(sectionRefs.current).forEach((node) => node && observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="ide">
      {/* Title Bar */}
      <TitleBar 
        name={PROFILE.name} 
        mobileOpen={mobileOpen} 
        setMobileOpen={setMobileOpen} 
      />
      
      <div className="layout">
        {/* Sidebar */}
        <Sidebar 
          activeId={activeId} 
          scrollTo={scrollTo} 
          profile={PROFILE} 
          mobileOpen={mobileOpen} 
        />
        
        <div style={{ flex: 1, minWidth: 0 }}>
          {/* Tab Bar */}
          <TabBar activeId={activeId} scrollTo={scrollTo} />
          
          <main className="editor">
            {/* HOME SECTION */}
            <section id="home" data-section-id="home" ref={el => sectionRefs.current.home = el} className="section">
              <Home profile={PROFILE} scrollTo={scrollTo} />
            </section>

            {/* ABOUT SECTION */}
            <section id="about" data-section-id="about" ref={el => sectionRefs.current.about = el} className="section">
              <About profile={PROFILE} />
            </section>

            {/* SKILLS SECTION */}
            <section id="skills" data-section-id="skills" ref={el => sectionRefs.current.skills = el} className="section">
              <Skills />
            </section>

            {/* EXPERIENCE SECTION */}
            <section id="experience" data-section-id="experience" ref={el => sectionRefs.current.experience = el} className="section">
              <Experience />
            </section>

            {/* EDUCATION SECTION - NEW */}
            <section id="education" data-section-id="education" ref={el => sectionRefs.current.education = el} className="section">
              <Education />
            </section>

            {/* PROJECTS SECTION */}
            <section id="projects" data-section-id="projects" ref={el => sectionRefs.current.projects = el} className="section">
              <Projects />
            </section>

            {/* CONTACT SECTION */}
            <section id="contact" data-section-id="contact" ref={el => sectionRefs.current.contact = el} className="section">
              <Contact profile={PROFILE} />
            </section>
          </main>
        </div>
      </div>

      {/* Status Bar */}
      <StatusBar profile={PROFILE} />
    </div>
  );
}

export default App;