// ScrollProgressBar.jsx
import { useEffect, useRef } from 'react';

export default function ScrollProgressBar() {
  const progressRef = useRef(0);
  const barRef = useRef(null);

  useEffect(() => {
    let animationFrameId;

    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const targetProgress = scrollHeight ? (scrollTop / scrollHeight) * 100 : 0;

      // Smoothly interpolate progress
      progressRef.current += (targetProgress - progressRef.current) * 0.1;

      if (barRef.current) {
        barRef.current.style.height = `${progressRef.current}%`; // Change width to height for vertical
      }

      animationFrameId = requestAnimationFrame(handleScroll);
    };

    animationFrameId = requestAnimationFrame(handleScroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="fixed top-0 right-0 w-1 h-screen bg-transparent z-50">
      <div
        ref={barRef}
        className="w-full bg-gradient-to-b from-yellow-500 via-yellow-600 to-primary rounded-full transition-all duration-300 ease-out"
        style={{ height: '0%' }} // Start with 0 height
      />
    </div>
  );
}