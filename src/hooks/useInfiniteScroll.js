import { useEffect } from 'react';

export const useInfiniteScroll = (ref, callback) => {
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        callback();
      }
    });

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, callback]);
};
