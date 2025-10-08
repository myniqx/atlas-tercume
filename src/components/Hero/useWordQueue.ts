import { useState, useEffect, useCallback, useRef } from 'react';

// Custom hook for word queue management
export const useWordQueue = (words: string[]) => {
  const [queue, setQueue] = useState<string[]>([...words].sort(() => Math.random() - 0.5));
  const numberRef = useRef(0);

  useEffect(() => {
    numberRef.current = 0;
    setQueue([...words].sort(() => Math.random() - 0.5));
  }, [words]);

  const takeWord = useCallback(() => {
    const word = queue[numberRef.current];
    numberRef.current = (numberRef.current + 1) % queue.length;
    return word;
  }, [queue, numberRef]);

  return { takeWord, queueLength: queue.length };
};
