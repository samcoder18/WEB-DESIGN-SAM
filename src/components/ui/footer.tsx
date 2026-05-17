const contactLinks = [
  { label: 'instagram', href: 'https://instagram.com' },
  { label: 'facebook', href: 'https://facebook.com' },
  { label: 'artstation', href: 'https://www.artstation.com' },
  { label: 'deviantart', href: 'https://www.deviantart.com' },
] as const;

export default function FooterSection() {
  return (
    <footer className="relative z-10 bg-[#eef3f1]">
      <div className="overflow-hidden rounded-t-[56px] bg-[#06070a] px-4 pb-6 pt-10 sm:rounded-t-[68px] sm:px-6 sm:pb-8 sm:pt-12 md:px-8 md:pb-10 md:pt-14">
        <div className="mx-auto grid w-full max-w-[1320px] gap-10 text-frost md:grid-cols-[minmax(0,1.2fr)_auto] md:items-start md:gap-20 lg:gap-28">
          <a
            href="/"
            aria-label="Перейти на главную"
            className="w-fit whitespace-pre-line text-left font-display text-[clamp(3.4rem,8vw,6.3rem)] font-black uppercase leading-[0.82] tracking-[-0.07em] text-transparent [text-stroke:1px_rgba(244,248,251,0.94)] [-webkit-text-stroke:1px_rgba(244,248,251,0.94)]"
          >
            ALEX{"\n"}TURNER
          </a>

          <div className="grid gap-7 text-left sm:grid-cols-2 sm:gap-12 md:justify-self-end md:gap-16">
            <div className="grid content-start gap-3">
              <p className="text-[0.72rem] font-black uppercase tracking-[0.2em] text-white/44">
                Social
              </p>

              <div className="grid gap-2">
                {contactLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="w-fit text-[0.98rem] font-semibold leading-6 text-white/84 transition duration-200 hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="grid content-start gap-3">
              <p className="text-[0.72rem] font-black uppercase tracking-[0.2em] text-white/44">
                Contact
              </p>

              <div className="grid gap-2">
                <a
                  href="mailto:alex@3dturner.com"
                  className="w-fit text-[0.98rem] font-semibold leading-6 text-white/84 transition duration-200 hover:text-white"
                >
                  alex@3dturner.com
                </a>
                <a
                  href="tel:+15551234567"
                  className="w-fit text-[0.98rem] font-semibold leading-6 text-white/84 transition duration-200 hover:text-white"
                >
                  +1 (555) 123-4567
                </a>
                <p className="max-w-[18ch] text-[0.98rem] font-semibold leading-6 text-white/84">
                  123 Creative Lane, Suite 45
                  <br />
                  Design City, CA 90210
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
