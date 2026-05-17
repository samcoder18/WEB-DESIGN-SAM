import { Link, Navigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { blogPosts } from '../data/blog';

export function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <article className="relative isolate min-h-screen overflow-hidden px-4 pb-24 pt-36 text-frost sm:px-6 lg:px-10 lg:pb-32 lg:pt-44">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_0%,rgba(215,226,234,0.16),transparent_45%)]" />

      <div className="mx-auto grid w-full max-w-[68rem] gap-12">
        <Link
          to="/blog"
          className="inline-flex w-fit items-center gap-3 rounded-full border border-white/14 px-4 py-2 text-xs font-black uppercase text-white/64 transition hover:border-white/34 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-frost"
        >
          <ArrowLeft aria-hidden="true" size={15} />
          Назад в блог
        </Link>

        <header className="grid gap-6">
          <div className="flex flex-wrap gap-3 text-xs font-extrabold uppercase text-white/45">
            <span>{post.category}</span>
            <span>{post.date}</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="max-w-[12ch] font-display text-[clamp(3.4rem,9vw,8.4rem)] font-black uppercase leading-[0.86] tracking-[-0.065em] text-white">
            {post.title}
          </h1>
          <p className="max-w-[46rem] text-balance text-[clamp(1.15rem,2vw,1.7rem)] font-medium leading-[1.5] text-white/68">
            {post.dek}
          </p>
        </header>

        <div className="grid gap-7 border-t border-white/12 pt-10 text-lg font-medium leading-8 text-white/68">
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
      </div>
    </article>
  );
}
