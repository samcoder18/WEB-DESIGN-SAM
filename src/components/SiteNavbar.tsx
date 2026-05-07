import { motion, useReducedMotion } from 'framer-motion';

const navItems = [
  { label: 'Обо мне', href: '#обо-мне' },
  { label: 'Услуги', href: '#услуги' },
  { label: 'Проекты', href: '#проекты' },
] as const;

export function SiteNavbar() {
  const shouldReduceMotion = Boolean(useReducedMotion());

  return (
    <div className="site-navbar-shell pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-5">
      <motion.nav
        aria-label="Основная навигация"
        className="premium-site-navbar pointer-events-auto"
        initial={shouldReduceMotion ? false : { opacity: 0, y: -10, filter: 'blur(8px)' }}
        animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ delay: 0.28, duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <ul className="premium-site-navbar__list" role="list">
          {navItems.map((item) => (
            <li key={item.href} className="premium-site-navbar__item">
              <a className="premium-site-navbar__link" href={item.href}>
                <span className="premium-site-navbar__label">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </motion.nav>
    </div>
  );
}
