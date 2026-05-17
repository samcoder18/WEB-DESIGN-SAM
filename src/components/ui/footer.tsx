import {
  Feather,
  Globe,
  Link as LinkIcon,
  MessageCircle,
  Send,
  Share2,
} from 'lucide-react';

const links = [
  {
    title: 'Возможности',
    href: '#',
  },
  {
    title: 'Решения',
    href: '#',
  },
  {
    title: 'Клиенты',
    href: '#',
  },
  {
    title: 'Цены',
    href: '#',
  },
  {
    title: 'Помощь',
    href: '#',
  },
  {
    title: 'Обо мне',
    href: '#',
  },
];

const socialLinks = [
  { label: 'Social Link 1', href: '#', Icon: Share2 },
  { label: 'Social Link 2', href: '#', Icon: MessageCircle },
  { label: 'Social Link 3', href: '#', Icon: LinkIcon },
  { label: 'Social Link 4', href: '#', Icon: Globe },
  { label: 'Social Link 5', href: '#', Icon: Send },
  { label: 'Social Link 6', href: '#', Icon: Feather },
];

export default function FooterSection() {
  return (
    <footer className="relative z-10 px-5 pb-10 pt-8 sm:px-8 sm:pb-12 md:px-10 md:pb-16">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[32px] border border-[rgba(244,248,251,0.1)] bg-[rgba(5,6,7,0.62)] px-6 py-10 text-frost shadow-[0_12px_28px_rgba(0,0,0,0.2),inset_0_1px_0_rgba(255,255,255,0.07)] backdrop-blur-[18px] backdrop-saturate-[104%] sm:rounded-[40px] sm:px-8 md:px-10 md:py-12">
        <a
          href="/"
          aria-label="Перейти на главную"
          className="mx-auto flex w-fit items-center justify-center text-center font-display text-lg font-extrabold uppercase tracking-[0.16em] text-white transition duration-200 hover:opacity-80"
        >
          Sam
        </a>

        <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm">
          {links.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="block text-white/58 transition duration-150 hover:text-white"
            >
              <span>{link.title}</span>
            </a>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm">
          {socialLinks.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(244,248,251,0.1)] bg-[rgba(255,255,255,0.03)] text-white/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition duration-200 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/8 hover:text-white"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>

        <span className="mt-8 block text-center text-sm text-white/45">
          © {new Date().getFullYear()} Tailark. Все права защищены
        </span>
      </div>
    </footer>
  );
}
