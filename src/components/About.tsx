import { Cpu, Shield } from 'lucide-react';

const About = () => {
  const skills = [
    "JavaScript / TypeScript",
    "React / Node.js",
    "Python / Scripting",
    "Network Security",
    "Penetration Testing",
    "Linux / Bash"
  ];

  return (
    <section id="about" style={{ padding: '5rem 10%', position: 'relative', zIndex: 10 }}>
      <h2 style={{ fontSize: '2.5rem', color: 'var(--text-primary)', marginBottom: '3rem', borderBottom: '1px solid var(--surface-border)', paddingBottom: '1rem' }}>
        <span style={{ color: 'var(--neon-secondary)' }}>01.</span> SYSTEM_SPECIFICATIONS
      </h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
        
        <div className="glow-border" style={{ padding: '2rem', backgroundColor: 'var(--surface-color)', borderRadius: '4px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', color: 'var(--neon-primary)' }}>
            <Cpu size={32} />
            <h3 style={{ fontSize: '1.5rem', margin: 0 }}>Processing Unit</h3>
          </div>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>
            I am a developer with a deep passion for cybersecurity. Building robust, secure applications is my primary protocol. I enjoy analyzing systems, finding vulnerabilities, and patching them before they can be exploited.
          </p>
        </div>

        <div className="glow-border" style={{ padding: '2rem', backgroundColor: 'var(--surface-color)', borderRadius: '4px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', color: 'var(--neon-secondary)' }}>
            <Shield size={32} />
            <h3 style={{ fontSize: '1.5rem', margin: 0 }}>Core Modules</h3>
          </div>
          <ul style={{ listStyleType: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            {skills.map((skill, index) => (
              <li key={index} style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontFamily: 'var(--font-mono)' }}>
                <span style={{ color: 'var(--neon-secondary)' }}>&gt;</span> {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
