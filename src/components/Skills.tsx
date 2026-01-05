import { motion } from 'framer-motion';
import { Palette, Search, Layers, Figma, MessageSquare, Sparkles, Repeat } from 'lucide-react';
import styles from './Skills.module.css';

const skillCategories = [
  {
    title: 'Design',
    description: 'Creating user-centered B2C experiences that balance business goals with user needs.',
    icon: Palette,
    color: 'orange',
  },
  {
    title: 'Research',
    description: 'Leveraging data and user insights to inform design decisions and strategy.',
    icon: Search,
    color: 'teal',
  },
  {
    title: 'Prototyping',
    description: 'Building interactive prototypes for quick validation and iteration.',
    icon: Layers,
    color: 'violet',
  },
];

const iDo = [
  { name: 'User Research', icon: Search },
  { name: 'Wireframes & Flows', icon: Layers },
  { name: 'Design Mockups', icon: Palette },
  { name: 'Interactive Prototypes', icon: Repeat },
];

const iCreate = [
  { name: 'B2C Products', icon: Sparkles },
  { name: 'Fintech Interfaces', icon: Layers },
  { name: 'Growth Experiments', icon: Repeat },
  { name: 'Design Systems', icon: Palette },
];

const iUse = [
  { name: 'Figma, Framer', icon: Figma },
  { name: 'ChatGPT, UX Pilot', icon: MessageSquare },
  { name: 'Lovable, Replit', icon: Sparkles },
  { name: 'Lottie Animations', icon: Layers },
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

export function Skills() {
  return (
    <section id="skills" className={`section ${styles.skills}`}>
      <div className="container">
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className={styles.label}>What & How</span>
          <h2 className={styles.title}>Skills & Tools</h2>
        </motion.div>

        <motion.div 
          className={styles.categories}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {skillCategories.map((category) => (
            <motion.div 
              key={category.title} 
              className={styles.category}
              variants={itemVariants}
            >
              <div className={`${styles.iconWrapper} ${styles[category.color]}`}>
                <category.icon size={24} />
              </div>
              <h3 className={styles.categoryTitle}>{category.title}</h3>
              <p className={styles.categoryDesc}>{category.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className={styles.lists}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className={styles.listCard} variants={itemVariants}>
            <h4 className={styles.listTitle}>I do</h4>
            <ul className={styles.list}>
              {iDo.map((item) => (
                <li key={item.name} className={styles.listItem}>
                  <item.icon size={16} className={styles.listIcon} />
                  {item.name}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div className={styles.listCard} variants={itemVariants}>
            <h4 className={styles.listTitle}>I create</h4>
            <ul className={styles.list}>
              {iCreate.map((item) => (
                <li key={item.name} className={styles.listItem}>
                  <item.icon size={16} className={styles.listIcon} />
                  {item.name}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div className={styles.listCard} variants={itemVariants}>
            <h4 className={styles.listTitle}>I use</h4>
            <ul className={styles.list}>
              {iUse.map((item) => (
                <li key={item.name} className={styles.listItem}>
                  <item.icon size={16} className={styles.listIcon} />
                  {item.name}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
