import {
  Box,
  LayoutTemplate,
  MonitorSmartphone,
  Presentation,
  Rocket,
  Sparkles,
} from "lucide-react";

import { FadeIn } from "../components/FadeIn";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";

const items = [
  {
    icon: Sparkles,
    title: "Оффер",
    description: "Сразу к сути.",
  },
  {
    icon: LayoutTemplate,
    title: "Сценарий",
    description: "Ведёт к действию.",
  },
  {
    icon: Box,
    title: "Система",
    description: "Один язык на всё.",
  },
  {
    icon: MonitorSmartphone,
    title: "Адаптив",
    description: "Без потерь в подаче.",
  },
  {
    icon: Presentation,
    title: "Презентации",
    description: "Продолжают сайт.",
  },
  {
    icon: Rocket,
    title: "Запуск",
    description: "Готово к работе.",
  },
] as const;

export function ServicesGridSection() {
  return (
    <section className="px-4 pb-20 text-frost sm:px-6 sm:pb-24 md:px-10 md:pb-28">
      <div className="mx-auto max-w-[1880px]">
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <FadeIn key={item.title} delay={index * 0.06} y={32}>
                <Card className="h-full border-white/10 bg-white/[0.025] text-frost shadow-none transition-colors duration-300 hover:border-white/16 hover:bg-white/[0.035]">
                  <CardHeader className="p-6 pb-3">
                    <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-[1rem] border border-white/12 bg-white/[0.03] text-frost/82 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                      <Icon className="h-6 w-6" strokeWidth={1.8} aria-hidden="true" />
                    </div>
                    <CardTitle className="max-w-[12ch] font-sans text-[clamp(1.1rem,1.35vw,1.4rem)] font-semibold leading-[1.02] text-white">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6 pt-0">
                    <CardDescription className="max-w-[20rem] font-sans text-[0.98rem] leading-7 text-frost/52">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
