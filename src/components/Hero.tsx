import { useState, useEffect } from 'react';
import { Terminal } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "> INITIALIZING SYSTEM...\n> ESTABLISHING SECURE CONNECTION...\n> HELLO, I'M DÁVID.\n> CYBERSECURITY ENTHUSIAST & DEVELOPER.";
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) clearInterval(timer);
    }, 40);
    return () => clearInterval(timer);
  }, []);

  return (
    <section style={{ height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 10%', position: 'relative', zIndex: 10 }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
        <Terminal size={48} color="var(--neon-primary)" />
        <h1 className="glitch-hover" style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', margin: 0, textTransform: 'uppercase', letterSpacing: '2px' }}>SYS_ADMIN</h1>
      </div>
      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 'clamp(1rem, 2vw, 1.5rem)',
        color: 'var(--neon-primary)',
        whiteSpace: 'pre-line',
        minHeight: '120px',
        lineHeight: '1.6'
      }}>
        {text}<span style={{ animation: 'blink 1s step-end infinite' }}>_</span>
      </div>
    </section>
  );
};

export default Hero;
