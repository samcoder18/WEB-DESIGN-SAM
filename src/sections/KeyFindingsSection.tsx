import { FadeIn } from '../components/FadeIn';

type FindingToneStyle = React.CSSProperties & {
  '--finding-glow-primary': string;
  '--finding-glow-secondary': string;
  '--finding-glow-tertiary': string;
};

const findings = [
  {
    value: '53%',
    description:
      'работы над сайтами уходит на правки и фиксы. Команды тратят больше времени на поддержку, чем на рост и развитие продукта.',
    tone: 'orange' as const,
  },
  {
    value: '71%',
    description:
      'считают конверсию ключевой метрикой. Но у немногих команд есть инструменты, чтобы системно влиять на этот показатель.',
    tone: 'violet' as const,
  },
  {
    value: '70%',
    description:
      'веб-проектов откладываются в приоритете, потому что выпускать изменения слишком долго, дорого или организационно тяжело.',
    tone: 'mint' as const,
  },
] as const;

const toneStyles = {
  orange: {
    '--finding-glow-primary': 'rgba(255, 163, 86, 0.94)',
    '--finding-glow-secondary': 'rgba(255, 106, 63, 0.82)',
    '--finding-glow-tertiary': 'rgba(255, 209, 116, 0.66)',
  },
  violet: {
    '--finding-glow-primary': 'rgba(97, 123, 255, 0.9)',
    '--finding-glow-secondary': 'rgba(233, 100, 168, 0.82)',
    '--finding-glow-tertiary': 'rgba(153, 108, 255, 0.64)',
  },
  mint: {
    '--finding-glow-primary': 'rgba(160, 255, 228, 0.88)',
    '--finding-glow-secondary': 'rgba(109, 241, 210, 0.8)',
    '--finding-glow-tertiary': 'rgba(79, 130, 210, 0.56)',
  },
} satisfies Record<(typeof findings)[number]['tone'], FindingToneStyle>;

export function KeyFindingsSection() {
  return (
    <section
      aria-labelledby="key-findings-heading"
      className="px-4 py-20 text-white sm:px-6 sm:py-24 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-[1880px]">
        <FadeIn y={36}>
          <div className="mb-12 text-center sm:mb-14 md:mb-16">
            <h2 id="key-findings-heading" className="key-findings-title">
              Key findings
            </h2>
          </div>
        </FadeIn>

        <div className="grid gap-6 lg:grid-cols-3">
          {findings.map((finding, index) => (
            <FadeIn key={finding.value} delay={index * 0.08} y={44}>
              <article className="finding-card" style={toneStyles[finding.tone] as FindingToneStyle}>
                <div className="finding-card__frame" aria-hidden="true">
                  <span className="finding-card__bloom finding-card__bloom--primary" />
                  <span className="finding-card__bloom finding-card__bloom--secondary" />
                  <span className="finding-card__bloom finding-card__bloom--tertiary" />
                </div>

                <div className="finding-card__content">
                  <p className="finding-card__value">{finding.value}</p>
                  <p className="finding-card__description">{finding.description}</p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
