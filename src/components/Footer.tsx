import { Linkedin, Twitter, Dribbble, Heart } from 'lucide-react';
import styles from './Footer.module.css';

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { label: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
  { label: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
  { label: 'Dribbble', icon: Dribbble, href: 'https://dribbble.com' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <span className={styles.logo}>JodieLee</span>
            <p className={styles.tagline}>
              Product Designer crafting B2C experiences in Singapore
            </p>
          </div>

          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Navigation</h4>
              <nav className={styles.nav}>
                {navLinks.map((link) => (
                  <a key={link.label} href={link.href} className={styles.navLink}>
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className={styles.linkGroup}>
              <h4 className={styles.linkTitle}>Social</h4>
              <div className={styles.socialLinks}>
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className={styles.socialLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <link.icon size={18} />
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} Jodie Lee. All rights reserved.
          </p>

          <p className={styles.builtWith}>
            Made with <Heart size={14} className={styles.heart} /> in Singapore
          </p>
        </div>
      </div>
    </footer>
  );
}
