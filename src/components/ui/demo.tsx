import * as React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BentoGridShowcase } from "@/components/ui/bento-product-features";

const cardClassName =
  "h-full border-white/10 bg-white/[0.025] text-frost shadow-none";
const mutedTextClassName = "text-frost/54";

const DirectionCard = () => (
  <Card className={`${cardClassName} flex flex-col`}>
    <CardHeader className="relative z-10">
      <div className="pt-1">
        <CardTitle className="font-display text-[clamp(2rem,3.4vw,4rem)] font-black uppercase leading-[0.94] tracking-normal text-white">
          Первый взгляд решает
        </CardTitle>
        <CardDescription className={`${mutedTextClassName} mt-5 max-w-[29rem] text-base leading-7`}>
          Образ цепляет до объяснений.
        </CardDescription>
      </div>
    </CardHeader>
  </Card>
);

const StructureCard = () => (
  <Card className={cardClassName}>
    <CardContent className="flex h-full flex-col justify-end p-6">
      <CardTitle className="font-sans text-base font-semibold text-white">Сценарий</CardTitle>
      <CardDescription className={`${mutedTextClassName} mt-2`}>
        Ведёт взгляд от интереса к действию.
      </CardDescription>
    </CardContent>
  </Card>
);

const FirstScreenCard = () => (
  <Card className={cardClassName}>
    <CardContent className="flex h-full items-center justify-center p-6">
      <div className="flex items-center justify-center">
        <span className="font-display text-[clamp(3.8rem,7vw,6rem)] font-black leading-[0.82] text-white">24H</span>
      </div>
    </CardContent>
  </Card>
);

const SystemCard = () => (
  <Card className={cardClassName}>
    <CardContent className="flex h-full flex-col justify-between p-6">
      <div className="flex justify-start">
        <span className="rounded-full border border-white/12 px-3 py-1 font-sans text-[0.68rem] font-medium uppercase tracking-[0.18em] text-frost/46">
          CVR
        </span>
      </div>
      <div className="flex flex-1 items-center justify-center pb-1">
        <span className="font-display text-[clamp(2.7rem,5.5vw,4.5rem)] font-black leading-[0.84] text-white">
          44%
        </span>
      </div>
      <div />
    </CardContent>
  </Card>
);

const LaunchCard = () => (
  <Card className={cardClassName}>
    <CardContent className="flex h-full flex-col justify-end p-6">
      <CardTitle className="font-sans text-base font-semibold text-white">Доверие</CardTitle>
      <CardDescription className={`${mutedTextClassName} mt-2`}>Сильный продукт чувствуется сразу.</CardDescription>
    </CardContent>
  </Card>
);

const DigitalImageCard = () => (
  <Card className={cardClassName}>
    <CardContent className="flex h-full flex-wrap items-center justify-between gap-6 p-6">
      <div className="max-w-[35rem]">
        <p className="mb-4 font-sans text-[0.68rem] font-bold uppercase leading-none text-frost/38">
          Сайт / Презентации / Digital-материалы
        </p>
        <CardTitle className="font-display text-[clamp(1.75rem,2.8vw,3.15rem)] font-black uppercase leading-none text-white">
          Один образ
        </CardTitle>
      </div>
    </CardContent>
  </Card>
);

export default function BenefitsBentoSection() {
  return (
    <section className="px-4 py-16 text-frost sm:px-6 sm:py-20 md:px-10 md:py-28">
      <div className="mx-auto w-full max-w-[1880px]">
        <div className="benefits-bento-header mb-14 sm:mb-16 md:mb-20">
          <div className="benefits-bento-header__lead">
            <h2 className="about-manifesto-heading max-w-[12ch]">Продукту верят</h2>
            <p className="mt-5 max-w-[28rem] font-sans text-base font-medium leading-7 text-frost/54">
              Минимум шума, максимум смысла. Каждый экран работает на понимание и следующий шаг.
            </p>
          </div>
          <div aria-hidden="true" className="benefits-bento-header__spacer" />
        </div>

        <BentoGridShowcase
          className="gap-3 md:gap-4 [&_.rounded-lg]:rounded-[1.1rem] [&_.tracking-tight]:tracking-normal"
          integration={<DirectionCard />}
          trackers={<StructureCard />}
          statistic={<FirstScreenCard />}
          focus={<SystemCard />}
          productivity={<LaunchCard />}
          shortcuts={<DigitalImageCard />}
        />
      </div>
    </section>
  );
}
