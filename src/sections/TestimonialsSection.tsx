import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1";

const testimonials = [
  {
    text: "Сам собрала лендинг так, что он наконец начал продавать не только визуалом, но и структурой. Стало проще объяснять ценность услуги, и заявки пошли заметно увереннее.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    name: "Екатерина Миронова",
    role: "Основательница косметического бренда",
  },
  {
    text: "Редкий случай, когда дизайнер думает как арт-директор и как продюсер одновременно. Каждый экран выглядел дорого и при этом чётко работал на задачу запуска.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    name: "Артём Белов",
    role: "Продюсер образовательного продукта",
  },
  {
    text: "Нам нужен был не просто сайт, а ощущение бренда. В итоге получили цельную систему: визуал, ритм, подачу кейсов и страницу, которую не хочется закрывать через три секунды.",
    image:
      "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=200&q=80",
    name: "Дарья Левина",
    role: "Маркетинг-директор студии интерьеров",
  },
  {
    text: "Процесс был собранным и очень спокойным. Без визуального шума, без случайных решений, с точным попаданием в характер бренда и сильным первым экраном.",
    image:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80",
    name: "Никита Громов",
    role: "Креативный продюсер",
  },
  {
    text: "После обновления сайта презентация продукта стала выглядеть в разы взрослее. Люди начали иначе воспринимать нас ещё до звонка, и это сразу сказалось на качестве лидов.",
    image:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
    name: "Полина Воронцова",
    role: "Соосновательница wellness-сервиса",
  },
  {
    text: "Сама структура проекта впечатлила не меньше визуала. Было ощущение, что каждый блок на странице знает свою роль и работает на общий темп истории.",
    image:
      "https://images.unsplash.com/photo-1504593811423-6dd665756598?auto=format&fit=crop&w=200&q=80",
    name: "Максим Ершов",
    role: "Фаундер digital-агентства",
  },
  {
    text: "Нужен был сайт, который чувствуется премиально, но не вычурно. Здесь это получилось очень точно: чисто, смело, запоминаемо и без ощущения шаблонности.",
    image:
      "https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=200&q=80",
    name: "Анна Тихонова",
    role: "Личный бренд-стратег",
  },
  {
    text: "Сэм быстро увидела слабые места в нашей подаче и пересобрала всё в понятную визуальную логику. На выходе сайт стал выглядеть как продукт другого уровня.",
    image:
      "https://images.unsplash.com/photo-1504257432389-52343af06ae3?auto=format&fit=crop&w=200&q=80",
    name: "Илья Руднев",
    role: "Руководитель e-commerce направления",
  },
  {
    text: "Особенно ценю то, как аккуратно здесь работает типографика и композиция. Не было ни одного декоративного решения ради декора, всё выглядело уверенно и уместно.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
    name: "Мария Соколова",
    role: "Бренд-менеджер fashion-проекта",
  },
] as const;

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

export function TestimonialsSection() {
  return (
    <section className="px-4 pb-[9.35rem] pt-16 text-frost sm:px-6 sm:pb-[11.45rem] sm:pt-20 md:px-10 md:pb-[14.3rem] md:pt-24">
      <div className="mx-auto max-w-[1880px]">
        <div className="flex max-h-[740px] justify-center gap-6 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_14%,black_86%,transparent)]">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn
            testimonials={secondColumn}
            className="hidden md:block"
            duration={19}
          />
          <TestimonialsColumn
            testimonials={thirdColumn}
            className="hidden lg:block"
            duration={17}
          />
        </div>
      </div>
    </section>
  );
}
