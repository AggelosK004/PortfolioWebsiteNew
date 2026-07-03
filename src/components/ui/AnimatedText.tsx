import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2']
  });

  const words = text.split(" ");
  const totalChars = text.replace(/ /g, '').length;
  let charCount = 0;

  return (
    <p ref={containerRef} className={`flex flex-wrap justify-center ${className}`}>
      {words.map((word, i) => {
        const characters = word.split("");
        return (
          <span key={i} className="mr-[0.25em] flex">
            {characters.map((char, j) => {
              const start = charCount / totalChars;
              const end = start + (1 / totalChars);
              charCount++;

              return (
                <span key={j} className="relative">
                  <span className="opacity-0">{char}</span>
                  <motion.span
                    className="absolute top-0 left-0"
                    style={{
                      opacity: useTransform(scrollYProgress, [start, end], [0.2, 1])
                    }}
                  >
                    {char}
                  </motion.span>
                </span>
              );
            })}
          </span>
        );
      })}
    </p>
  );
};
