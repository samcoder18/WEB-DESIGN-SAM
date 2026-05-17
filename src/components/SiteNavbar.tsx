import { useEffect, useState } from 'react';
import { motion, useMotionValueEvent, useReducedMotion, useScroll } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Главная', href: '/' },
  { label: 'Работы', href: '/#проекты' },
  { label: 'Блог', href: '/blog' },
] as const;

const compactScrollOffset = 96;

export function SiteNavbar() {
  const shouldReduceMotion = Boolean(useReducedMotion());
  const { scrollY } = useScroll();
  const location = useLocation();
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
        <Link className="premium-site-navbar__brand" to="/" aria-label="Sam, перейти наверх">
          Sam.
        </Link>

        <ul className="premium-site-navbar__list" role="list">
          {navItems.map((item) => (
            <li key={item.href} className="premium-site-navbar__item">
              <Link
                className="premium-site-navbar__link"
                to={item.href}
                aria-current={
                  (item.href === '/' && location.pathname === '/') ||
                  (item.href === '/blog' && location.pathname.startsWith('/blog'))
                    ? 'page'
                    : undefined
                }
              >
                <span className="premium-site-navbar__label">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>

        <Link className="premium-site-navbar__cta" to="/#контакты">
          Связаться
        </Link>
      </motion.nav>
    </div>
  );
}
