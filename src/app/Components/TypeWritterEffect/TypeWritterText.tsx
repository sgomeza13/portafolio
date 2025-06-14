"use client"
import { useEffect, useState, ReactNode } from 'react';
import { motion } from 'framer-motion';
import { getTextContent } from '@/app/hooks/useGetTextContentHook';

interface TypewriterTextProps {
  children: ReactNode;
  speed?: number; // ms per character
  className?: string;
  cursor?: boolean;
  cursorCharacter?: string;
  onDone?: () => void;
}



/**
 * A component that renders a typewriter effect for the given text.
 *
 * @param {TypewriterTextProps} props The props for the TypewriterText component.
 * @param {ReactNode} props.children The text to render with the typewriter effect. Only children sopported are strings and numbers. not lists
 * @param {number} props.speed The speed of the typewriter effect in milliseconds.
 * @param {string} props.className Additional CSS class names to apply to the container element.
 * @param {boolean} props.cursor Whether to render a cursor at the end of the text.
 *
 * @example
 * <TypewriterText speed={100} cursor={false}>Hello, world!</TypewriterText>
 */
export default function TypewriterText({
  children,
  speed = 60,
  className = '',
  cursor = true,
  cursorCharacter = '|',
  onDone,
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = getTextContent(children);

  useEffect(() => {
    let currentIndex = 0;
    const finishText = fullText.length;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, currentIndex + 1));
      currentIndex = currentIndex + 1;
      if (currentIndex === finishText) {
        clearInterval(interval);
        onDone?.();
      }
    }, speed);

    return () => clearInterval(interval);
  }, [fullText, speed, onDone]);

  return (
    <div className={className}>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {displayedText}
      </motion.span>
      {cursor && (
        <motion.span
          className="inline-block ml-1"
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
        >
          {cursorCharacter}
        </motion.span>
      )}
    </div>
  );
}