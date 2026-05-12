import { useEffect, useState } from 'react';
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from 'framer-motion';

const navItems = [
  { label: 'Услуги', href: '#услуги' },
  { label: 'Работы', href: '#проекты' },
  { label: 'Отзывы', href: '#обо-мне' },
] as const;

const compactScrollOffset = 96;

export function SiteNavbar() {
  const shouldReduceMotion = Boolean(useReducedMotion());
  const { scrollY } = useScroll();
  const [isCompact, setIsCompact] = useState(false);

  useEffect(() => {
    setIsCompact(window.scrollY > compactScrollOffset);
  }, []);

  useMotionValueEvent(scrollY, 'change', (latestScrollY) => {
    const nextIsCompact = latestScrollY > compactScrollOffset;

    setIsCompact((currentIsCompact) =>
      currentIsCompact === nextIsCompact ? currentIsCompact : nextIsCompact,
    );
  });

  return (
    <div className="site-navbar-shell pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center">
      <motion.nav
        aria-label="Основная навигация"
        className="premium-site-navbar pointer-events-auto"
        data-compact={isCompact ? 'true' : 'false'}
        initial={
          shouldReduceMotion
            ? false
            : { opacity: 0, y: -12, scale: 0.985, filter: 'blur(10px)' }
        }
        animate={
          shouldReduceMotion
            ? undefined
            : { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }
        }
        transition={{ delay: 0.18, duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
      >
        <a className="premium-site-navbar__brand" href="#content" aria-label="Sam, перейти наверх">
          Sam.
        </a>

        <ul className="premium-site-navbar__list" role="list">
          {navItems.map((item) => (
            <li key={item.href} className="premium-site-navbar__item">
              <a className="premium-site-navbar__link" href={item.href}>
                <span className="premium-site-navbar__label">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <a className="premium-site-navbar__cta" href="#услуги">
          Связаться
        </a>
      </motion.nav>
    </div>
  );
}
