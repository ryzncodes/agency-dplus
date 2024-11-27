import { Fifth, First, Fourth, Second, Third } from '@/icons/ApproachIcons';

export const NAV_ITEMS = [
  {
    title: 'Home',
    href: 'main',
  },
  {
    title: 'About',
    href: 'about',
  },
  {
    title: 'Services',
    href: 'services',
  },
  {
    title: 'Approach',
    href: 'approach',
  },
  {
    title: 'Contact',
    href: 'contact',
  },
];

export const CARDS = [
  {
    title: 'Design',
    description:
      'Bringing ideas to life with stunning, functional designs that captivate and engage. From branding strategies to user-friendly interfaces, we craft impactful solutions for web, mobile applications, and logos tailored to your vision.',
    services: [
      ['Web pages', 'Branding'],
      ['Mobile applications', 'Logo'],
    ],
    number: '01.',
    classes: '',
  },
  {
    title: 'Fullstack Development',
    description:
      'Building seamless full-stack solutions, from dynamic web applications and online stores to robust CMS platforms and APIs. We deliver scalable and efficient systems tailored to your needs.',
    services: [
      ['Online Store', 'Web applications'],
      ['CMS', 'API Development'],
    ],
    number: '02.',
    classes: 'border-t border-gray-1/50',
  },
  {
    title: 'Mobile Development',
    description:
      'Creating intuitive and high-performance mobile apps for Android and iOS. We specialize in delivering seamless user experiences that bring your ideas to the fingertips of your audience.',
    services: [['Android', 'IOS']],
    number: '03.',
    classes: 'border-t border-gray-1/50',
  },
];

export const APPROACH_CARDS = [
  {
    icon: First,
    title: 'Консультация',
    description:
      'Мы внимательно выслушиваем пожелания и представления заказчика о проекте. Затем делимся своим видением и, на основе этого обмена, приходим к общему соглашению.',
  },
  {
    icon: Second,
    title: 'Совместный обзор',
    description:
      'Затем приступаем к созданию дизайна. После завершения проводим совместный обзор, где заказчик, при желании может внести изменения.',
  },
  {
    icon: Third,
    title: 'Разработка',
    description: 'После утверждения дизайна, мы приступаем к непосредственной разработке продукта.',
  },
  {
    icon: Fourth,
    title: 'Тестирование',
    description:
      'По завершении разработки тщательно тестируем каждый компонент продукта. Затем приглашаем заказчика для пользовательского тестирования.',
  },
  {
    icon: Fifth,
    title: 'Финальный результат',
    description:
      'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates laboriosam ad eius, culpa soluta ab. Beatae optio quas adipisci aliquam quia velit soluta iste dicta, modi tenetur magnam, aut laborum placeat est. Unde minima amet illo eveniet qui sunt omnis laudantium laboriosam, officia dignissimos molestias tempore velit. Provident, explicabo. Dolor.',
  },
];

export const RADIO_FIELDS = [
  {
    title: 'Какой тип услуг вас интересует?',
    classes: 'mr-[2.25vw]',
    radioArray: [
      { name: 'Дизайн / Брендинг', value: 'design/branding' },
      { name: 'Веб разработка', value: 'web-dev' },
      { name: 'Мобильная разработка', value: 'mobile-dev' },
      { name: 'Все вышеперечисленные', value: 'all-types' },
      { name: 'Другое', value: 'other-service' },
    ],
    formKey: '_service',
  },
  {
    title: 'Каков ваш бюджет?',
    classes: '',
    radioArray: [
      { name: '8000TMT - 15000TMT', value: '8-15' },
      { name: '15000TMT - 25000TMT', value: '15-25' },
      { name: '25000TMT - 50000TMT', value: '25-50' },
      { name: '50000TMT+', value: '50+' },
    ],
    formKey: '_budget',
  },
  {
    title: 'Примерно, сколько страниц будет иметь ваш проект?',
    classes: 'mr-[2.25vw]',
    radioArray: [
      { name: 'Меньше 5-ти', value: '<5' },
      { name: '6-10', value: '6-10' },
      { name: '11-20', value: '11-20' },
      { name: '20+', value: '20+' },
    ],
    formKey: '_pages',
  },
  {
    title: 'Насколько быстро вам нужен проект?',
    classes: '',
    radioArray: [
      { name: 'Максимально быстро', value: 'max-fast' },
      { name: 'Высокая приоритетность ', value: 'high-prio ' },
      { name: 'Обычное время', value: 'regular' },
      { name: 'Не торопитесь ', value: 'take-your-time' },
    ],
    formKey: '_quickness',
  },
];

export const INPUT_FIELDS = [
  { label: 'Выше имя', name: 'first', classes: 'inline-block !w-[calc(50%-2vw)] mr-[4vw]', required: true },
  { label: 'Ваш номер', name: 'phone', classes: 'inline-block !w-[calc(50%-2vw)]', type: 'number', required: true },
  { label: 'Email', name: 'email', classes: '', type: 'email' },
  { label: 'Название компании', name: 'company', classes: '', required: true },
  { label: 'Ссылка на сайт', name: 'websiteUrl', classes: '' },
];

export const BOOK_FORM_DEFAULT_STATE = {
  _service: null,
  _budget: null,
  _pages: null,
  _quickness: null,

  first: '',
  phone: '',
  email: '',
  company: '',
  websiteUrl: '',
  message: '',
};
