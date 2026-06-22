
import { Activity, Lock, Wifi } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Network Traffic Analyzer",
      description: "A tool to monitor and analyze network packets in real-time, detecting suspicious patterns and potential intrusions.",
      icon: <Activity size={32} color="var(--neon-primary)" />,
      tech: ["Python", "Scapy", "React"]
    },
    {
      title: "Secure Auth Gateway",
      description: "Implementation of a zero-trust authentication system with multi-factor support and rate limiting.",
      icon: <Lock size={32} color="var(--neon-secondary)" />,
      tech: ["Node.js", "Redis", "JWT"]
    },
    {
      title: "Vulnerability Scanner",
      description: "Automated scanner that checks web applications for common vulnerabilities like XSS, SQLi, and CSRF.",
      icon: <Wifi size={32} color="var(--neon-accent)" />,
      tech: ["Go", "Bash", "Docker"]
    }
  ];

  return (
    <section id="projects" style={{ padding: '5rem 10%', position: 'relative', zIndex: 10 }}>
      <h2 style={{ fontSize: '2.5rem', color: 'var(--text-primary)', marginBottom: '3rem', borderBottom: '1px solid var(--surface-border)', paddingBottom: '1rem' }}>
        <span style={{ color: 'var(--neon-secondary)' }}>02.</span> ACTIVE_PROCESSES
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        {projects.map((proj, idx) => (
          <div key={idx} className="glow-border" style={{ 
            padding: '2rem', 
            backgroundColor: 'var(--surface-color)', 
            borderRadius: '4px',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
              {proj.icon}
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>PID: {Math.floor(Math.random() * 9000) + 1000}</span>
            </div>
            <h3 style={{ fontSize: '1.5rem', margin: '0 0 1rem 0', color: 'var(--text-primary)' }}>{proj.title}</h3>
            <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', flexGrow: 1, marginBottom: '2rem' }}>
              {proj.description}
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {proj.tech.map((t, i) => (
                <span key={i} style={{ 
                  fontFamily: 'var(--font-mono)', 
                  fontSize: '0.85rem', 
                  color: 'var(--neon-secondary)',
                  padding: '0.2rem 0.5rem',
                  backgroundColor: 'rgba(0, 243, 255, 0.1)',
                  borderRadius: '2px'
                }}>
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
