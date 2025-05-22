import { useEffect, useRef } from 'react';

const AnimatedIcon = ({ src, attributes, height, width }) => {
  const iconRef = useRef(null);

  useEffect(() => {
    const loadScript = async () => {
      if (!window.animatedIconsLoaded) {
        await new Promise((resolve) => {
          const script = document.createElement('script');
          script.src = 'https://animatedicons.co/scripts/embed-animated-icons.js';
          script.onload = () => {
            window.animatedIconsLoaded = true;
            resolve();
          };
          script.onerror = () => {
            console.error('Failed to load animated icons script');
            resolve();
          };
          document.body.appendChild(script);
        });
      }

      if (iconRef.current) {
        iconRef.current.setAttribute('src', src);
        iconRef.current.setAttribute('attributes', attributes);
        iconRef.current.setAttribute('height', height);
        iconRef.current.setAttribute('width', width);
      }
    };

    loadScript();
  }, [src, attributes, height, width]);

  return <animated-icons ref={iconRef} />;
};

export default AnimatedIcon;