import { ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blog';

const featuredPost = blogPosts[0];
const secondaryPosts = blogPosts.slice(1);
const MotionLink = motion.create(Link);

export function BlogPage() {
  const shouldReduceMotion = Boolean(useReducedMotion());

  return (
    <section className="relative isolate min-h-screen px-4 pb-24 pt-36 text-frost sm:px-6 lg:px-10 lg:pb-32 lg:pt-44">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-80 bg-[linear-gradient(180deg,rgba(215,226,234,0.08),transparent)]" />
      </div>

      <motion.div
        className="mx-auto grid w-full max-w-[68rem] gap-10"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <header className="grid gap-5 border-b border-white/12 pb-10">
          <div className="grid gap-4">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-white/42">
              Studio notes / blog
            </p>
            <h1 className="font-display text-[clamp(2.8rem,6.5vw,5.9rem)] font-black uppercase leading-[0.9] tracking-[-0.055em] text-white">
              Блог
            </h1>
          </div>
        </header>

        <article className="grid gap-5 border-b border-white/12 pb-8 lg:grid-cols-[8rem_minmax(0,1fr)_auto] lg:items-start">
          <div className="grid gap-2 text-xs font-extrabold uppercase text-white/38">
            <span>Featured</span>
            <span>{featuredPost.date}</span>
            <span>{featuredPost.readTime}</span>
          </div>

          <div className="grid max-w-[40rem] gap-3">
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-white/38">
              {featuredPost.category}
            </p>
            <h2 className="font-display text-[clamp(1.35rem,2.35vw,2.35rem)] font-black uppercase leading-[1] tracking-[-0.04em] text-white">
              {featuredPost.title}
            </h2>
            <p className="max-w-[37rem] text-sm font-medium leading-6 text-white/54 sm:text-base">
              {featuredPost.dek}
            </p>
          </div>

          <div className="lg:pt-1">
            <Link
              to={`/blog/${featuredPost.slug}`}
              className="inline-flex w-fit items-center gap-3 border-b border-white/34 pb-1 text-sm font-black uppercase tracking-[-0.02em] text-white transition hover:border-white hover:text-frost focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-frost"
            >
              Читать
              <ArrowUpRight aria-hidden="true" size={16} strokeWidth={2.4} />
            </Link>
          </div>
        </article>

        <div className="grid">
          {secondaryPosts.map((post, index) => (
            <MotionLink
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group grid gap-5 border-b border-white/10 py-7 transition-colors hover:border-white/28 sm:grid-cols-[4.5rem_minmax(0,0.62fr)_minmax(18rem,1fr)_auto] sm:items-start"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: index * 0.06, duration: 0.56, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="font-display text-xl font-black leading-none text-white/24">
                0{index + 2}
              </span>
              <div className="grid gap-2 text-xs font-extrabold uppercase text-white/38">
                <span>{post.category}</span>
                <span>{post.date}</span>
              </div>
              <div className="grid gap-3">
                <h2 className="max-w-[26ch] font-display text-[clamp(1.2rem,2vw,2.1rem)] font-black uppercase leading-[1] tracking-[-0.04em] text-white transition-colors group-hover:text-frost">
                  {post.title}
                </h2>
                <p className="max-w-[42rem] text-sm font-medium leading-6 text-white/54 sm:text-base">
                  {post.dek}
                </p>
              </div>
              <span className="inline-flex h-8 w-8 items-center justify-center text-white/44 transition group-hover:translate-x-0.5 group-hover:text-white">
                <ArrowUpRight aria-hidden="true" size={17} />
              </span>
            </MotionLink>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
