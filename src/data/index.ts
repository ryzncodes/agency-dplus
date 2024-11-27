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
      'Bringing ideas to life with stunning, functional designs that captivate and engage. From branding strategies to user-friendly interfaces, we craft impactful solutions for web, mobile applications, and logos tailored for you.',
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
    title: 'Consultation',
    description:
      `We carefully listen to the client's wishes and vision for the project. Then, we share our perspective and, based on this exchange, reach a mutual agreement.`,
  },
  {
    icon: Second,
    title: 'Collaborative Review',
    description:
      'We then proceed with the design process. Once completed, we conduct a collaborative review, where the client can provide feedback and request changes if desired.',
  },
  {
    icon: Third,
    title: 'Development',
    description: 'Once the design is approved, we begin the actual development of the product.',
  },
  {
    icon: Fourth,
    title: 'Testing',
    description:
      'After development is complete, we thoroughly test every component of the product. Then, we invite the client for user testing.',
  },
  {
    icon: Fifth,
    title: 'Final Result',
    description:
      'We deliver a polished, fully functional product ready to meet your needs and exceed expectations. Every detail is refined to ensure quality, functionality, and satisfaction.',
  },
];

export const RADIO_FIELDS = [
  {
    title: 'What type of services are you interested in?',
    classes: 'mr-[2.25vw]',
    radioArray: [
      { name: 'Design / Branding', value: 'design/branding' },
      { name: 'Web Development', value: 'web-dev' },
      { name: 'Mobile Development', value: 'mobile-dev' },
      { name: 'All of the above', value: 'all-types' },
      { name: 'Other', value: 'other-service' },
    ],
    formKey: '_service',
  },
  {
    title: 'What is your budget?',
    classes: '',
    radioArray: [
      { name: 'RM 2000 - RM 4000', value: '2-4' },
      { name: 'RM 4000 - RM 6000', value: '4-6' },
      { name: 'RM 6000 - RM 8000', value: '6-8' },
      { name: 'RM 8000+', value: '8+' },
    ],
    formKey: '_budget',
  },
  {
    title: 'Approximately, how many pages will your project have?',
    classes: 'mr-[2.25vw]',
    radioArray: [
      { name: 'Less than 5', value: '<5' },
      { name: '6-10', value: '6-10' },
      { name: '11-20', value: '11-20' },
      { name: '20+', value: '20+' },
    ],
    formKey: '_pages',
  },
  {
    title: 'How quickly do you need the project?',
    classes: '',
    radioArray: [
      { name: 'As fast as possible', value: 'max-fast' },
      { name: 'High priority', value: 'high-prio ' },
      { name: 'Regular timeframe', value: 'regular' },
      { name: 'Take your time', value: 'take-your-time' },
    ],
    formKey: '_quickness',
  },
];

export const INPUT_FIELDS = [
  { label: 'Your Name', name: 'first', classes: 'inline-block !w-[calc(50%-2vw)] mr-[4vw]', required: true },
  { label: 'Your Phone', name: 'phone', classes: 'inline-block !w-[calc(50%-2vw)]', type: 'number', required: true },
  { label: 'Email', name: 'email', classes: '', type: 'email' },
  { label: 'Company Name', name: 'company', classes: '', required: true },
  { label: 'Website URL', name: 'websiteUrl', classes: '' },
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
