import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import { AuroraBackground } from '@/components/ui/aurora-background';
import styles from './Hero.module.css';

const marqueeItems = [
  'user research',
  'wireframes',
  'prototypes',
  'design systems',
  'CRO',
  'fintech',
  'B2C products',
  'market growth',
];

export function Hero() {
  return (
    <AuroraBackground className={styles.hero}>
      {/* Marquee Banner */}
      <div className={styles.marqueeWrapper}>
        <div className={styles.marquee}>
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <span key={index} className={styles.marqueeItem}>
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className={`container ${styles.container}`}>
        <motion.div 
          className={styles.content}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div 
            className={styles.badge}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Sparkles size={14} />
            <span>Available for new projects</span>
          </motion.div>
          
          <motion.h1 
            className={styles.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            <span className={styles.titleLine}>I'm Jodie Lee,</span>
            <span className={styles.titleAccent}>Product Designer</span>
          </motion.h1>
          
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Crafting B2C experiences that drive growth. Specializing in fintech 
            products and conversion-focused design in Singapore.
          </motion.p>

          <motion.div 
            className={styles.ctas}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <a href="#work" className={styles.ctaPrimary}>
              View My Work
              <ArrowDown size={18} />
            </a>
            <a href="#contact" className={styles.ctaSecondary}>
              Get in Touch
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className={styles.scrollIndicator}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </AuroraBackground>
  );
}
