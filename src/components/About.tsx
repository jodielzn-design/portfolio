import { motion } from 'framer-motion';
import { MapPin, Coffee, Music, Plane } from 'lucide-react';
import styles from './About.module.css';

const jobs = [
  {
    title: 'Product Designer',
    company: 'Circles.Life',
    period: '2024 → Now',
    current: true,
  },
  {
    title: 'Design Intern',
    company: 'Tech Startup',
    period: '2023 → 2024',
    current: false,
  },
];

const interests = [
  { icon: Coffee, label: 'Specialty coffee' },
  { icon: Music, label: 'Lo-fi beats' },
  { icon: Plane, label: 'Travel' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

export function About() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <div className={styles.grid}>
          <motion.div 
            className={styles.header}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.label}>Who I Am</span>
            <h2 className={styles.title}>About Me</h2>
          </motion.div>

          <motion.div 
            className={styles.content}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Photo placeholder */}
            <motion.div className={styles.photoWrapper} variants={itemVariants}>
              <div className={styles.photo}>
                <span className={styles.photoInitials}>JL</span>
              </div>
              <div className={styles.locationBadge}>
                <MapPin size={14} />
                <span>Singapore</span>
              </div>
            </motion.div>

            <motion.div className={styles.intro} variants={itemVariants}>
              <h3 className={styles.name}>Hey, I'm Jodie! 👋</h3>
              <h4 className={styles.role}>Building impactful B2C experiences</h4>
            </motion.div>

            <motion.div className={styles.bio} variants={itemVariants}>
              <p className={styles.bioText}>
                I'm a product designer passionate about creating digital experiences 
                that balance user needs with business objectives. Currently at Circles.Life, 
                I design fintech products and drive market growth through strategic CRO initiatives.
              </p>
              <p className={styles.bioText}>
                I love leveraging AI tools to move fast and deliver impactful solutions. 
                When I'm not designing, you'll find me exploring cafes or planning my next adventure.
              </p>
            </motion.div>

            <motion.div className={styles.interests} variants={itemVariants}>
              <span className={styles.interestsLabel}>When I'm not designing:</span>
              <div className={styles.interestsList}>
                {interests.map((interest) => (
                  <div key={interest.label} className={styles.interestItem}>
                    <interest.icon size={16} />
                    <span>{interest.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div className={styles.experience} variants={itemVariants}>
              <h5 className={styles.experienceTitle}>Experience</h5>
              <div className={styles.jobList}>
                {jobs.map((job, index) => (
                  <div key={index} className={styles.job}>
                    <div className={styles.jobInfo}>
                      <span className={styles.jobTitle}>{job.title}</span>
                      <span className={styles.jobCompany}>{job.company}</span>
                    </div>
                    <div className={styles.jobRight}>
                      {job.current && <span className={styles.currentBadge}>Current</span>}
                      <span className={styles.jobPeriod}>{job.period}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
