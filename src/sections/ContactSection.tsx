import { ChangeEvent, FormEvent, useId, useState } from 'react';
import { ArrowUpRight, Send } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

const contactEmail = 'samcoder18@gmail.com';
const telegramUrl = 'https://t.me/samcoder18';

type ContactFormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

const initialFormState: ContactFormState = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

export function ContactSection() {
  const shouldReduceMotion = Boolean(useReducedMotion());
  const formId = useId();
  const [formState, setFormState] = useState<ContactFormState>(initialFormState);

  const updateField =
    (field: keyof ContactFormState) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormState((currentState) => ({
        ...currentState,
        [field]: event.target.value,
      }));
    };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(
      `Новый проект от ${formState.name || 'контакта с сайта'}`,
    );
    const body = encodeURIComponent(
      [
        `Имя: ${formState.name}`,
        `Email: ${formState.email}`,
        formState.phone ? `Телефон: ${formState.phone}` : null,
        '',
        formState.message,
      ]
        .filter(Boolean)
        .join('\n'),
    );

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="контакты"
      aria-labelledby="contact-heading"
      className="relative isolate mt-[clamp(2rem,4vw,3.5rem)] overflow-hidden rounded-t-[var(--site-section-radius)] bg-[#eef3f1] px-4 pb-24 pt-24 text-[#101820] sm:px-6 lg:px-10 lg:pb-32 lg:pt-32"
    >
      <motion.div
        className="mx-auto grid w-full max-w-[78rem] gap-14 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start lg:gap-20 xl:gap-24"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
        whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
      >
        <header className="grid gap-8 lg:pr-8">
          <div className="grid gap-5">
            <h2
              id="contact-heading"
              className="max-w-[6.2ch] font-display text-[clamp(2.5rem,5.1vw,4.8rem)] font-black uppercase leading-[0.92] text-[#111a25]"
            >
              Давайте обсудим проект
            </h2>
          </div>

          <a
            href={`mailto:${contactEmail}`}
            className="group inline-flex w-fit items-center gap-2 border-b border-[#101820]/45 pb-1 text-[clamp(1rem,1.7vw,1.32rem)] font-extrabold leading-none text-[#111a25] transition hover:border-[#101820] hover:text-[#101820] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#101820]"
          >
            {contactEmail}
            <ArrowUpRight
              aria-hidden="true"
              className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={2.4}
            />
          </a>

          <a
            href={telegramUrl}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex w-fit items-center gap-2 border-b border-[#101820]/45 pb-1 text-[clamp(1rem,1.7vw,1.32rem)] font-extrabold leading-none text-[#111a25] transition hover:border-[#101820] hover:text-[#101820] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#101820]"
          >
            Telegram
            <ArrowUpRight
              aria-hidden="true"
              className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={2.4}
            />
          </a>
        </header>

        <form
          className="grid gap-7 pt-1"
          aria-label="Форма контакта"
          onSubmit={handleSubmit}
        >
          <div className="grid gap-7 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label htmlFor={`${formId}-name`} className="sr-only">
                Имя
              </label>
              <input
                id={`${formId}-name`}
                name="name"
                type="text"
                autoComplete="name"
                required
                value={formState.name}
                onChange={updateField('name')}
                placeholder="Имя*"
                className="h-12 w-full border-0 border-b border-[#101820]/16 bg-transparent px-0 text-sm font-semibold text-[#111a25] outline-none transition placeholder:text-[#101820]/28 focus:border-[#101820]"
              />
            </div>

            <div>
              <label htmlFor={`${formId}-email`} className="sr-only">
                Email
              </label>
              <input
                id={`${formId}-email`}
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formState.email}
                onChange={updateField('email')}
                placeholder="Email*"
                className="h-12 w-full border-0 border-b border-[#101820]/16 bg-transparent px-0 text-sm font-semibold text-[#111a25] outline-none transition placeholder:text-[#101820]/28 focus:border-[#101820]"
              />
            </div>

            <div>
              <label htmlFor={`${formId}-phone`} className="sr-only">
                Телефон
              </label>
              <input
                id={`${formId}-phone`}
                name="phone"
                type="tel"
                autoComplete="tel"
                value={formState.phone}
                onChange={updateField('phone')}
                placeholder="Телефон"
                className="h-12 w-full border-0 border-b border-[#101820]/16 bg-transparent px-0 text-sm font-semibold text-[#111a25] outline-none transition placeholder:text-[#101820]/28 focus:border-[#101820]"
              />
            </div>

            <div className="sm:col-span-2">
              <label htmlFor={`${formId}-message`} className="sr-only">
                Сообщение
              </label>
              <textarea
                id={`${formId}-message`}
                name="message"
                required
                rows={6}
                value={formState.message}
                onChange={updateField('message')}
                placeholder="Коротко опишите задачу*"
                className="min-h-28 w-full resize-y border-0 border-b border-[#101820]/16 bg-transparent px-0 py-3 text-sm font-semibold leading-7 text-[#111a25] outline-none transition placeholder:text-[#101820]/28 focus:border-[#101820]"
              />
            </div>
          </div>

          <button
            type="submit"
            className="group relative inline-flex min-h-11 w-full items-center justify-center gap-2 overflow-hidden rounded-full border border-[#101820]/55 bg-transparent px-6 py-3 text-xs font-black uppercase text-[#101820] transition duration-300 hover:-translate-y-0.5 hover:border-[#101820] hover:bg-white/52 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#101820]"
          >
            <span className="relative z-10">Отправить</span>
            <Send
              aria-hidden="true"
              className="relative z-10 h-3.5 w-3.5 transition group-hover:translate-x-0.5"
              strokeWidth={2.3}
            />
          </button>
        </form>
      </motion.div>
    </section>
  );
}
