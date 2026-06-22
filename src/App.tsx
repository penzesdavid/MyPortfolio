
import Background from './components/Background';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div style={{ position: 'relative' }}>
      <Background />
      
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        padding: '1.5rem 10%',
        display: 'flex',
        justifyContent: 'flex-end',
        gap: '2rem',
        zIndex: 100,
        backgroundColor: 'rgba(10, 10, 10, 0.8)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--surface-border)',
        fontFamily: 'var(--font-mono)'
      }}>
        <a href="#about" style={{ color: 'var(--text-primary)' }}>
          <span style={{ color: 'var(--neon-secondary)' }}>01.</span> About
        </a>
        <a href="#projects" style={{ color: 'var(--text-primary)' }}>
          <span style={{ color: 'var(--neon-secondary)' }}>02.</span> Projects
        </a>
        <a href="#contact" style={{ color: 'var(--text-primary)' }}>
          <span style={{ color: 'var(--neon-secondary)' }}>03.</span> Contact
        </a>
      </nav>

      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
