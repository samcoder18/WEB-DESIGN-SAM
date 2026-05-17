import { ChangeEvent, FormEvent, useId, useState } from 'react';
import { ArrowUpRight, Mail, Send } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';

const contactEmail = 'hello@sam.studio';

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

const contactRows = [
  {
    label: 'Почта',
    value: contactEmail,
    href: `mailto:${contactEmail}`,
  },
  {
    label: 'Фокус',
    value: '3D, motion, web',
    href: '/#проекты',
  },
  {
    label: 'Ответ',
    value: '1-2 рабочих дня',
    href: null,
  },
] as const;

export function ContactPage() {
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

    const subject = encodeURIComponent(`Новый проект от ${formState.name || 'контакта сайта'}`);
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
    <section className="relative isolate min-h-screen overflow-hidden px-4 pb-24 pt-36 text-frost sm:px-6 lg:px-10 lg:pb-32 lg:pt-44">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_50%_0%,rgba(215,226,234,0.16),transparent_52%)]" />
        <div className="absolute bottom-0 left-1/2 h-72 w-[min(58rem,92vw)] -translate-x-1/2 border-t border-white/10 bg-[linear-gradient(180deg,rgba(244,248,251,0.05),transparent)]" />
      </div>

      <motion.div
        className="mx-auto grid w-full max-w-[74rem] gap-12 lg:grid-cols-[minmax(0,0.82fr)_minmax(28rem,1fr)] lg:items-start lg:gap-16"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
      >
        <header className="grid gap-8 lg:sticky lg:top-36">
          <div className="grid gap-5">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-white/42">
              Contact / briefing
            </p>
            <h1 className="max-w-[8.5ch] font-display text-[clamp(3.35rem,8.5vw,8.2rem)] font-black uppercase leading-[0.86] tracking-[-0.065em] text-white">
              Давайте обсудим проект
            </h1>
          </div>

          <a
            href={`mailto:${contactEmail}`}
            className="group inline-flex w-fit items-center gap-3 border-b border-white/38 pb-1 text-[clamp(1.15rem,2vw,1.65rem)] font-extrabold leading-none tracking-[-0.03em] text-white transition hover:border-white hover:text-frost focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-frost"
          >
            {contactEmail}
            <ArrowUpRight
              aria-hidden="true"
              className="h-5 w-5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={2.4}
            />
          </a>

          <dl className="grid gap-0 border-y border-white/10">
            {contactRows.map((item) => (
              <div
                key={item.label}
                className="grid grid-cols-[6.75rem_minmax(0,1fr)] gap-5 border-b border-white/10 py-4 last:border-b-0"
              >
                <dt className="text-xs font-extrabold uppercase text-white/36">{item.label}</dt>
                <dd className="min-w-0 text-sm font-semibold leading-6 text-white/62">
                  {item.href ? (
                    <a
                      href={item.href}
                      className="transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-frost"
                    >
                      {item.value}
                    </a>
                  ) : (
                    item.value
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </header>

        <form
          className="grid gap-8 border-t border-white/12 pt-8 lg:mt-24"
          aria-label="Форма контакта"
          onSubmit={handleSubmit}
        >
          <div className="grid gap-8 sm:grid-cols-2">
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
                className="h-14 w-full border-0 border-b border-white/28 bg-transparent px-0 text-lg font-semibold text-white outline-none transition placeholder:text-white/42 focus:border-frost"
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
                className="h-14 w-full border-0 border-b border-white/28 bg-transparent px-0 text-lg font-semibold text-white outline-none transition placeholder:text-white/42 focus:border-frost"
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
                className="h-14 w-full border-0 border-b border-white/28 bg-transparent px-0 text-lg font-semibold text-white outline-none transition placeholder:text-white/42 focus:border-frost"
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
                placeholder="Задача, сроки, бюджет или ссылка на референсы*"
                className="min-h-40 w-full resize-y border-0 border-b border-white/28 bg-transparent px-0 py-4 text-lg font-semibold leading-7 text-white outline-none transition placeholder:text-white/42 focus:border-frost"
              />
            </div>
          </div>

          <button
            type="submit"
            className="group relative inline-flex min-h-14 w-full items-center justify-center gap-3 overflow-hidden rounded-full border border-frost/70 px-6 py-4 text-sm font-black uppercase text-frost transition duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-frost hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-frost"
          >
            <span className="relative z-10">Отправить</span>
            <Send
              aria-hidden="true"
              className="relative z-10 h-4 w-4 transition group-hover:translate-x-0.5"
              strokeWidth={2.3}
            />
          </button>

          <p className="max-w-[38rem] text-sm font-medium leading-6 text-white/42">
            Форма откроет письмо в вашем почтовом клиенте. Для конфиденциальных материалов можно
            сразу написать на почту выше.
          </p>

          <div className="flex items-center gap-3 border-t border-white/10 pt-7 text-sm font-semibold leading-6 text-white/54">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/12 bg-white/[0.03] text-white/72">
              <Mail aria-hidden="true" className="h-4 w-4" />
            </span>
            <span>Коротко опишите результат, который нужен, а не только формат работ.</span>
          </div>
        </form>
      </motion.div>
    </section>
  );
}
