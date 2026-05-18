import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { blogPosts } from '../data/blog';

export function BlogPostPage() {
  const { slug } = useParams();
  const shouldReduceMotion = Boolean(useReducedMotion());
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <article className="relative isolate min-h-screen bg-[#f7f6f1] px-4 pb-20 pt-36 text-[#141414] sm:px-6 lg:px-10 lg:pb-28 lg:pt-44">
      <motion.div
        className="mx-auto grid w-full max-w-[72rem] gap-12"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
      >
        <Link
          to="/blog"
          className="inline-flex w-fit items-center gap-3 border-b border-[#141414]/24 pb-1 text-xs font-bold uppercase text-[#141414]/58 transition hover:border-[#141414] hover:text-[#141414] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#141414]"
        >
          <ArrowLeft aria-hidden="true" size={15} strokeWidth={1.9} />
          Назад в блог
        </Link>

        <header className="grid min-w-0 gap-7 border-b border-[#141414]/12 pb-10">
          <div className="grid gap-2 text-xs font-bold uppercase text-[#141414]/48 sm:flex sm:flex-wrap sm:gap-x-4 sm:gap-y-2">
            <span>{post.category}</span>
            <span>{post.date}</span>
            <span>{post.readTime}</span>
            <span>{post.signal}</span>
          </div>
          <h1 className="max-w-[19rem] break-words font-display text-3xl font-bold leading-tight tracking-normal text-[#141414] sm:max-w-[17ch] sm:text-5xl lg:text-6xl">
            {post.title}
          </h1>
          <p className="max-w-[21rem] break-words text-base font-medium leading-7 text-[#141414]/64 sm:max-w-[48rem] sm:text-xl sm:leading-8">
            {post.dek}
          </p>
        </header>

        <div className="grid w-full max-w-[21rem] gap-7 break-words text-lg font-medium leading-8 text-[#141414]/68 sm:mx-auto sm:max-w-[45rem]">
          <p>
            Это заготовка под полноценную статью. Сейчас маршрут, метаданные и визуальная
            структура уже готовы, поэтому контент можно заменить реальным текстом без переделки
            интерфейса.
          </p>
          <p>
            Для следующего шага логично подключить MDX или CMS, если статьи будут регулярно
            публиковаться и редактироваться отдельно от кода.
          </p>
        </div>
      </motion.div>
    </article>
  );
}
