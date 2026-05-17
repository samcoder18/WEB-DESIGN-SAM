export type BlogPost = {
  slug: string;
  title: string;
  dek: string;
  category: string;
  date: string;
  readTime: string;
  signal: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'motion-that-sells-the-object',
    title: 'Motion, который продает объект, а не украшает экран',
    dek: 'Как я строю анимацию вокруг веса, материалов и намерения пользователя, чтобы сайт ощущался как продуктовая сцена.',
    category: 'Motion direction',
    date: '15 мая 2026',
    readTime: '6 мин',
    signal: 'Hierarchy first',
  },
  {
    slug: 'portfolio-homepage-as-trailer',
    title: 'Главный экран портфолио как трейлер, а не визитка',
    dek: 'Разбор первого viewport: темп, типографика, крупный объект, тишина вокруг него и один запоминающийся жест.',
    category: 'Creative process',
    date: '08 мая 2026',
    readTime: '5 мин',
    signal: 'First viewport',
  },
  {
    slug: 'three-d-web-without-noise',
    title: '3D в вебе без визуального шума',
    dek: 'Когда объем усиливает историю, а когда превращается в дорогую заставку. Практический чеклист для лендингов.',
    category: '3D web',
    date: '01 мая 2026',
    readTime: '7 мин',
    signal: 'Performance aware',
  },
  {
    slug: 'premium-ui-rhythm',
    title: 'Премиальный интерфейс держится на ритме',
    dek: 'Почему расстояния, паузы, повторяемость и контраст важнее, чем очередной слой blur или glow.',
    category: 'Interface craft',
    date: '24 апреля 2026',
    readTime: '4 мин',
    signal: 'Discipline',
  },
];
