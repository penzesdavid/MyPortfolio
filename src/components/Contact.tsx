import { useState } from 'react';
import { Send, TerminalSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('SECURE TRANSMISSION INITIATED...\n\n(This is a demo)');
  };

  return (
    <section id="contact" style={{ padding: '5rem 10% 10rem', position: 'relative', zIndex: 10 }}>
      <h2 style={{ fontSize: '2.5rem', color: 'var(--text-primary)', marginBottom: '3rem', borderBottom: '1px solid var(--surface-border)', paddingBottom: '1rem' }}>
        <span style={{ color: 'var(--neon-secondary)' }}>03.</span> SECURE_COMMUNICATION
      </h2>

      <div className="glow-border" style={{ 
        maxWidth: '600px', 
        margin: '0 auto', 
        backgroundColor: 'var(--surface-color)', 
        borderRadius: '4px',
        overflow: 'hidden'
      }}>
        <div style={{ 
          backgroundColor: '#0a0a0a', 
          padding: '1rem', 
          borderBottom: '1px solid var(--surface-border)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem'
        }}>
          <TerminalSquare size={20} color="var(--neon-primary)" />
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.9rem', color: 'var(--text-secondary)' }}>root@local:~# execute ./contact_form.sh</span>
        </div>
        
        <form onSubmit={handleSubmit} style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontFamily: 'var(--font-mono)', color: 'var(--neon-secondary)' }}>USER_ID [Name]:</label>
            <input 
              type="text" 
              required
              value={formData.name}
              onChange={e => setFormData({...formData, name: e.target.value})}
              style={{
                width: '100%',
                padding: '0.8rem',
                backgroundColor: '#0a0a0a',
                border: '1px solid var(--surface-border)',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-mono)',
                outline: 'none'
              }}
              onFocus={e => e.target.style.borderColor = 'var(--neon-primary)'}
              onBlur={e => e.target.style.borderColor = 'var(--surface-border)'}
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontFamily: 'var(--font-mono)', color: 'var(--neon-secondary)' }}>ROUTE_IP [Email]:</label>
            <input 
              type="email" 
              required
              value={formData.email}
              onChange={e => setFormData({...formData, email: e.target.value})}
              style={{
                width: '100%',
                padding: '0.8rem',
                backgroundColor: '#0a0a0a',
                border: '1px solid var(--surface-border)',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-mono)',
                outline: 'none'
              }}
              onFocus={e => e.target.style.borderColor = 'var(--neon-primary)'}
              onBlur={e => e.target.style.borderColor = 'var(--surface-border)'}
            />
          </div>
          <div>
            <label style={{ display: 'block', marginBottom: '0.5rem', fontFamily: 'var(--font-mono)', color: 'var(--neon-secondary)' }}>PAYLOAD [Message]:</label>
            <textarea 
              required
              rows={4}
              value={formData.message}
              onChange={e => setFormData({...formData, message: e.target.value})}
              style={{
                width: '100%',
                padding: '0.8rem',
                backgroundColor: '#0a0a0a',
                border: '1px solid var(--surface-border)',
                color: 'var(--text-primary)',
                fontFamily: 'var(--font-mono)',
                outline: 'none',
                resize: 'vertical'
              }}
              onFocus={e => e.target.style.borderColor = 'var(--neon-primary)'}
              onBlur={e => e.target.style.borderColor = 'var(--surface-border)'}
            ></textarea>
          </div>
          <button 
            type="submit"
            style={{
              padding: '1rem',
              backgroundColor: 'transparent',
              border: '1px solid var(--neon-primary)',
              color: 'var(--neon-primary)',
              fontFamily: 'var(--font-mono)',
              fontSize: '1rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              marginTop: '1rem',
              transition: 'all 0.3s'
            }}
            onMouseOver={e => {
              e.currentTarget.style.backgroundColor = 'var(--neon-primary)';
              e.currentTarget.style.color = '#000';
            }}
            onMouseOut={e => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = 'var(--neon-primary)';
            }}
          >
            TRANSMIT <Send size={18} />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
