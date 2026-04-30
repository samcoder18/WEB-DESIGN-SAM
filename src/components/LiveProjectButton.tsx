import { ArrowUpRight } from 'lucide-react';

type LiveProjectButtonProps = {
  className?: string;
};

export function LiveProjectButton({ className = '' }: LiveProjectButtonProps) {
  return (
    <button
      type="button"
      className={`inline-flex items-center justify-center gap-2 rounded-full border-2 border-frost px-8 py-3 text-sm font-medium uppercase tracking-widest text-frost transition duration-200 hover:bg-frost/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-frost sm:px-10 sm:py-3.5 sm:text-base ${className}`}
    >
      <span>Смотреть проект</span>
      <ArrowUpRight aria-hidden="true" className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.8} />
    </button>
  );
}
