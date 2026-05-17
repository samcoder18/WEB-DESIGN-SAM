export default function FooterSection() {
  return (
    <footer className="relative z-10 bg-[#eef3f1]">
      <div className="overflow-hidden rounded-t-[56px] bg-ink px-4 pb-6 pt-10 sm:rounded-t-[68px] sm:px-6 sm:pb-8 sm:pt-12 md:px-8 md:pb-10 md:pt-14">
        <div className="mx-auto grid w-full max-w-[1320px] gap-10 text-frost md:grid-cols-[minmax(0,1fr)_minmax(14rem,0.32fr)] md:items-start md:gap-14 lg:gap-20">
          <a
            href="/"
            aria-label="Перейти на главную"
            className="w-fit text-left font-display text-[clamp(3.4rem,8vw,6.3rem)] font-black uppercase leading-[0.86] tracking-normal text-frost"
          >
            SAM
          </a>

          <div className="grid gap-7 text-left md:justify-self-start md:pt-2">
            <div className="grid content-start gap-5">
              <p className="font-display text-[clamp(1rem,1.45vw,1.35rem)] font-black uppercase leading-none tracking-normal text-white/64">
                Contact
              </p>

              <div className="grid gap-2">
                <a
                  href="mailto:samcoder18@gmail.com"
                  className="w-fit text-[0.98rem] font-semibold leading-6 text-white/84 transition duration-200 hover:text-white"
                >
                  samcoder18@gmail.com
                </a>
                <a
                  href="https://t.me/samcoder18"
                  target="_blank"
                  rel="noreferrer"
                  className="w-fit text-[0.98rem] font-semibold leading-6 text-white/84 transition duration-200 hover:text-white"
                >
                  Telegram
                </a>
                <p className="max-w-[20ch] text-[0.98rem] font-semibold leading-6 text-white/84">
                  Миллионная улица, 21
                  <br />
                  Санкт-Петербург
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
