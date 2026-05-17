const manifestoHeading = ['Образ', 'сильного', 'бренда'] as const;
const manifestoSignals = ['Веб-дизайн', 'Айдентика', 'Digital-опыт'] as const;
const manifestoCopy = [
  'Проектирую веб-дизайн для брендов и продуктов, которым нужен не просто красивый сайт, а сильный digital-образ.',
  'От первого экрана до визуальной системы в целом помогаю собрать цельное впечатление, чтобы бренд воспринимался дороже, понятнее и убедительнее.',
] as const;

export function AboutSection() {
  return (
    <section
      id="обо-мне"
      aria-labelledby="about-heading"
      className="relative bg-transparent px-4 py-20 text-frost sm:px-6 sm:py-24 md:px-10 md:py-32"
    >
      <div className="sr-only">
        <h2 id="about-heading">Обо мне</h2>
      </div>

      <div className="flex items-center">
        <div
          className="about-manifesto-stage relative mx-auto flex w-full max-w-[1880px] items-center overflow-hidden px-3 py-12 sm:px-5 sm:py-16 md:px-8 md:py-20 lg:px-14"
        >
          <div className="about-manifesto-grid absolute inset-0" aria-hidden="true" />
          <div className="about-manifesto-vignette absolute inset-0" aria-hidden="true" />

          <div className="relative z-[1] w-full py-14 sm:py-16 md:py-20">
            <div className="about-manifesto-layout">
              <div className="about-manifesto-lead">
                <p className="about-manifesto-heading">
                  {manifestoHeading.map((line, index) => (
                    <span
                      key={line}
                      className={index === manifestoHeading.length - 1 ? 'about-manifesto-heading-accent' : undefined}
                    >
                      {line}
                    </span>
                  ))}
                </p>
              </div>

              <div className="about-manifesto-divider" aria-hidden="true" />

              <div className="about-manifesto-content">
                <div className="about-manifesto-signals" aria-label="Ключевые направления">
                  {manifestoSignals.map((signal) => (
                    <span key={signal}>{signal}</span>
                  ))}
                </div>

                <div className="about-manifesto-copy">
                  {manifestoCopy.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
