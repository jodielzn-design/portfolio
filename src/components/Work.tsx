import { motion } from 'framer-motion';
import { ArrowUpRight, Wallet, BarChart3, Rocket } from 'lucide-react';
import styles from './Work.module.css';

const projects = [
  {
    id: 1,
    title: 'Fintech Payment Flow',
    description: 'Mobile payment experience redesign for a leading fintech platform. Streamlined checkout flow reducing friction by 40% and increasing successful transactions.',
    year: '2025',
    tags: ['Fintech', 'Product Design'],
    metrics: '+40% conversion',
    icon: Wallet,
    gradient: 'orange',
    featured: true,
  },
  {
    id: 2,
    title: 'Subscription Dashboard',
    description: 'Self-service portal for subscription management designed to reduce churn and improve user retention.',
    year: '2024',
    tags: ['B2C', 'CRO'],
    metrics: '-25% churn',
    icon: BarChart3,
    gradient: 'teal',
    featured: false,
  },
  {
    id: 3,
    title: 'Growth Landing Pages',
    description: 'Conversion-optimized landing pages driving significant uplift in sign-ups through strategic A/B testing.',
    year: '2024',
    tags: ['Growth', 'Market Expansion'],
    metrics: '+60% sign-ups',
    icon: Rocket,
    gradient: 'violet',
    featured: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

export function Work() {
  const featuredProject = projects.find(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="work" className={`section ${styles.work}`}>
      <div className="container">
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className={styles.label}>Selected Work</span>
            <h2 className={styles.title}>Latest Projects</h2>
          </div>
          <p className={styles.subtitle}>
            From concept to reality—explore how I bring product ideas to life with measurable impact.
          </p>
        </motion.div>

        {/* Featured Project - Full Width */}
        {featuredProject && (
          <motion.article 
            className={styles.featuredCard}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -4 }}
          >
            <div className={`${styles.featuredImage} ${styles[featuredProject.gradient]}`}>
              <div className={styles.imageContent}>
                <featuredProject.icon size={64} strokeWidth={1.5} />
                <span className={styles.projectNumber}>01</span>
              </div>
            </div>
            <div className={styles.featuredContent}>
              <div className={styles.projectMeta}>
                <span className={styles.projectYear}>{featuredProject.year}</span>
                {featuredProject.tags.map((tag) => (
                  <span key={tag} className={styles.projectTag}>{tag}</span>
                ))}
              </div>
              <h3 className={styles.featuredTitle}>{featuredProject.title}</h3>
              <p className={styles.featuredDescription}>{featuredProject.description}</p>
              <div className={styles.metrics}>
                <span className={styles.metricsValue}>{featuredProject.metrics}</span>
              </div>
              <button className={styles.viewBtn}>
                View Case Study
                <ArrowUpRight size={18} />
              </button>
            </div>
          </motion.article>
        )}

        {/* Other Projects - Side by Side */}
        <motion.div 
          className={styles.projectGrid}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {otherProjects.map((project, index) => (
            <motion.article 
              key={project.id} 
              className={styles.projectCard}
              variants={itemVariants}
              whileHover={{ y: -4 }}
            >
              <div className={`${styles.cardImage} ${styles[project.gradient]}`}>
                <div className={styles.imageContent}>
                  <project.icon size={48} strokeWidth={1.5} />
                  <span className={styles.projectNumber}>0{index + 2}</span>
                </div>
              </div>
              <div className={styles.cardContent}>
                <div className={styles.projectMeta}>
                  <span className={styles.projectYear}>{project.year}</span>
                  {project.tags.map((tag) => (
                    <span key={tag} className={styles.projectTag}>{tag}</span>
                  ))}
                </div>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDescription}>{project.description}</p>
                <div className={styles.cardFooter}>
                  <span className={`${styles.metricsValue} ${styles.small}`}>{project.metrics}</span>
                  <button className={styles.viewBtnSecondary}>
                    View Project
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div 
          className={styles.viewAll}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <a href="#contact" className={styles.viewAllBtn}>
            View All Projects
            <ArrowUpRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
