import { ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blog';

const MotionLink = motion.create(Link);

export function BlogPage() {
  const shouldReduceMotion = Boolean(useReducedMotion());

  return (
    <section className="relative isolate min-h-screen bg-[#f7f6f1] px-4 pb-20 pt-36 text-[#141414] sm:px-6 lg:px-10 lg:pb-28 lg:pt-44">
      <motion.div
        className="mx-auto grid w-full max-w-[72rem] gap-14"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
      >
        <header className="grid gap-8 border-b border-[#141414]/12 pb-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(19rem,0.42fr)] lg:items-end">
          <div className="grid gap-5">
            <p className="text-xs font-bold uppercase text-[#141414]/46">Studio notes / blog</p>
            <h1 className="font-display text-5xl font-black uppercase leading-none tracking-normal text-[#141414] sm:text-6xl lg:text-7xl">
              Блог
            </h1>
          </div>
          <p className="max-w-md text-base font-medium leading-7 text-[#141414]/62">
            Наблюдения о движении, 3D, интерфейсном ритме и том, как собирать сайты без
            визуального шума.
          </p>
        </header>

        <div className="grid border-t border-[#141414]/10">
          {blogPosts.map((post, index) => (
            <MotionLink
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group grid gap-5 border-b border-[#141414]/10 py-7 text-[#141414] transition-colors hover:border-[#141414]/34 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#141414] sm:grid-cols-[3.25rem_minmax(8rem,0.34fr)_minmax(0,1fr)_auto] sm:items-start lg:py-9"
              initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
              whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: index * 0.04, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="font-display text-lg font-black leading-none text-[#141414]/24">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div className="grid gap-2 text-xs font-bold uppercase leading-none text-[#141414]/48">
                <span>{post.category}</span>
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
              <div className="grid max-w-[45rem] gap-3">
                <p className="text-xs font-bold uppercase text-[#141414]/42">{post.signal}</p>
                <h2 className="font-display text-2xl font-bold leading-tight tracking-normal text-[#141414] transition-colors group-hover:text-[#141414]/72 sm:text-3xl">
                  {post.title}
                </h2>
                <p className="max-w-[39rem] text-base font-medium leading-7 text-[#141414]/62">
                  {post.dek}
                </p>
              </div>
              <span className="inline-flex h-9 w-9 items-center justify-center text-[#141414]/44 transition group-hover:translate-x-0.5 group-hover:text-[#141414]">
                <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.8} />
              </span>
            </MotionLink>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
