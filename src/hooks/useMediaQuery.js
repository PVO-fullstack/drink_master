import { useEffect, useState } from 'react';

// Courtesy of https://upmostly.com/tutorials/how-to-use-media-queries-in-react

export const useMediaQuery = (size) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const query = `(min-width: ${size})`;

    const media = window.matchMedia(query);

    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);

    window.addEventListener('resize', listener);

    return () => window.removeEventListener('resize', listener);
  }, [matches, size]);

  return matches;
};
