import { useEffect, useState } from 'react';

const sections = ['Overview', 'Challenge', 'Research', 'Design', 'Results'];

const ScrollProgressBar = ({ onNavClick }) => {
  const [scrollWidth, setScrollWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollWidth(scrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ position: 'sticky', top: 0, left: 0, width: '100%', zIndex: 9999 }}>
      {/* Scroll bar itself */}
      <div
        style={{
          height: '5px',
          width: `${scrollWidth}%`,
          backgroundColor: '#00ED5E',
          transition: 'width 0.2s ease-out',
        }}
      />
      
      {/* Section names */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '2rem',
          padding: '8px 0',
          backgroundColor: 'white',
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
        }}
      >
        {sections.map((section) => (
          <button
            key={section}
            onClick={() => onNavClick(section.toLowerCase())}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '14px',
              fontWeight: 500,
              color: '#333',
            }}
          >
            {section}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ScrollProgressBar;
