import { useViewportScroll } from 'framer-motion';
import { useEffect, useState } from 'react';

export function useScrolling() {
  const [isScrolling, setIsScrolling] = useState(false);

  const { scrollYProgress } = useViewportScroll();

  let timer: any;

  function hideHeader() {
    setIsScrolling(true);

    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      setIsScrolling(false);
    }, 750);
  }

  useEffect(() => {
    const unsubscribeScroll = scrollYProgress.onChange(hideHeader);

    return () => {
      unsubscribeScroll();
    };
  }, []);

  return isScrolling;
}
