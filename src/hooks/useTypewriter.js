import { useEffect, useState } from 'react';

export function useTypewriter(lines, speed = 28, startDelay = 300) {
  const [output, setOutput] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    // Make sure we have lines to display
    if (!lines || lines.length === 0) {
      setOutput('');
      setDone(true);
      return;
    }

    const full = lines.join('\n');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (reduce) {
      setOutput(full);
      setDone(true);
      return;
    }
    
    let i = 0;
    let timer;
    const start = setTimeout(() => {
      timer = setInterval(() => {
        i += 1;
        setOutput(full.slice(0, i));
        if (i >= full.length) {
          clearInterval(timer);
          setDone(true);
        }
      }, speed);
    }, startDelay);
    
    return () => {
      clearTimeout(start);
      clearInterval(timer);
    };
  }, [lines, speed, startDelay]); // Added dependencies

  return [output, done];
}