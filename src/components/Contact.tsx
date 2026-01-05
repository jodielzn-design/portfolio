import { motion } from 'framer-motion';
import { Mail, ArrowUpRight, Calendar, Linkedin, Twitter, Dribbble, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import styles from './Contact.module.css';

const socialLinks = [
  { label: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
  { label: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
  { label: 'Dribbble', icon: Dribbble, href: 'https://dribbble.com' },
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

export function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('hello@jodielee.design');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="container">
        <motion.div 
          className={styles.ctaBanner}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <span className={styles.ctaEmoji}>✨</span>
          <h3 className={styles.ctaText}>
            Let's create something amazing together
          </h3>
          <p className={styles.ctaSubtext}>
            Available for freelance projects and full-time opportunities
          </p>
        </motion.div>

        <div className={styles.grid}>
          <motion.div 
            className={styles.header}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className={styles.label}>Get In Touch</span>
            <h2 className={styles.title}>Contact Me</h2>
          </motion.div>

          <motion.div 
            className={styles.content}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Primary Actions */}
            <motion.div className={styles.primaryActions} variants={itemVariants}>
              <a href="mailto:hello@jodielee.design" className={styles.actionCard}>
                <div className={styles.actionIcon}>
                  <Mail size={24} />
                </div>
                <div className={styles.actionContent}>
                  <span className={styles.actionTitle}>Send an Email</span>
                  <span className={styles.actionDesc}>Let's discuss your project</span>
                </div>
                <ArrowUpRight size={20} className={styles.actionArrow} />
              </a>

              <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className={styles.actionCard}>
                <div className={`${styles.actionIcon} ${styles.teal}`}>
                  <Calendar size={24} />
                </div>
                <div className={styles.actionContent}>
                  <span className={styles.actionTitle}>Book a Call</span>
                  <span className={styles.actionDesc}>30 min intro chat</span>
                </div>
                <ArrowUpRight size={20} className={styles.actionArrow} />
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div className={styles.socialSection} variants={itemVariants}>
              <span className={styles.socialLabel}>Find me on</span>
              <div className={styles.socialLinks}>
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className={styles.socialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={link.label}
                  >
                    <link.icon size={20} />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Copy Email */}
            <motion.div className={styles.emailSection} variants={itemVariants}>
              <span className={styles.emailLabel}>Or copy my email</span>
              <button onClick={handleCopyEmail} className={styles.emailButton}>
                <span className={styles.emailText}>hello@jodielee.design</span>
                <span className={styles.copyIcon}>
                  {copied ? <Check size={18} /> : <Copy size={18} />}
                </span>
              </button>
              {copied && <span className={styles.copiedToast}>Copied to clipboard!</span>}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
