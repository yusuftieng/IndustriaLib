import { motion } from 'motion/react';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.03,
      delayChildren: 0.1,
    },
  },
};

const child = {
  hidden: {
    opacity: 0,
    y: 15,
    filter: 'blur(8px)',
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1.2,
      ease: [0.2, 0.65, 0.3, 0.9],
    },
  },
};

export function HeroHeadline() {
  const brand = "IndustriaLib";
  const rest = "The Industrial Engineering Hub";
  const restWords = rest.split(' ');

  return (
    <motion.h1 
      className="font-serif text-4xl md:text-6xl font-medium leading-[1.1] tracking-tight text-text-primary mb-8"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <span className="inline-block whitespace-nowrap">
        <span className="font-museo font-medium inline-block">
          {brand.split('').map((char, index) => (
            <motion.span key={`brand-${index}`} variants={child} className="inline-block">
              {char}
            </motion.span>
          ))}
        </span>
        <motion.span variants={child} className="inline-block">:</motion.span>
        <span className="inline-block">&nbsp;</span>
      </span>
      {restWords.map((word, wordIndex) => {
        const isLastWord = wordIndex === restWords.length - 1;
        return (
          <span key={`word-${wordIndex}`} className="inline-block">
            {word.split('').map((char, charIndex) => (
              <motion.span key={`char-${wordIndex}-${charIndex}`} variants={child} className="inline-block">
                {char}
              </motion.span>
            ))}
            {!isLastWord && <span className="inline-block">&nbsp;</span>}
          </span>
        );
      })}
    </motion.h1>
  );
}

