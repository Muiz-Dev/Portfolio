import { Code, LayoutTemplate, Smartphone, Database, ShoppingCart, PenTool } from 'lucide-react';

export const personalData = {
  name: 'Muiz Adesope',
  title: 'Product-Focused Full-Stack Developer',
  email: 'contact@muizdev.xyz',
  brandLogoUrl: 'https://jowfuqlsaxqjfceuxsez.supabase.co/storage/v1/object/public/storage/muiz-dev-brand-white.png',
  phone: '+2349030049952',
  location: 'Lagos, Nigeria',
  portfolioUrl: 'https://muiz-dev.vercel.app',
  resumeUrl: 'https://jowfuqlsaxqjfceuxsez.supabase.co/storage/v1/object/public/storage/Muiz_Adesope_Resume.pdf',
  linkedin: 'https://linkedin.com/in/muiz-dev',
  github: 'https://github.com/Muiz-dev',
  instagram: 'https://www.instagram.com/adesopemuiz/',
  facebook: '',
  x: 'https://x.com/muiz_sui',
  resumeText: `Muiz Adesope
Product-Focused Full-Stack Developer
contact@muizdev.xyz | +2349030049952 | Lagos, Nigeria | https://muiz-dev.vercel.app | linkedin.com/in/muiz-dev

EDUCATION
National Diploma / Mechatronics Engineering
Yaba College of Technology, Lagos, Nigeria
2024 - present

PROFESSIONAL EXPERIENCE
Full-Stack Developer (Freelance)
Self-employed / Remote Clients
2023 - present
- Built custom web apps for SMEs: complaint systems, dashboards, auth flows, and notifications
- Led UI/UX, backend logic, and deployment across React/Next.js and PHP stacks
- Shipped maintainable, responsive interfaces and stable backends for production use

Software Engineering Intern
Digital Technology Academy
2024 - 2025
- Collaborated on feature development, testing, and bug fixes in a team workflow
- Assisted in frontend and backend tasks using modern tools and version control

Web Developer
LoveView Estates (UK-based Real Estate Agency)
2024 - present
- Delivered a responsive real-estate website with CMS-managed listings and lead capture
- Structured content for clear navigation, service discovery, and SEO-friendly pages

Product Developer / Community Manager
WheatChain Protocol
2023 - 2025
- Built web and Telegram mini-app experiences and integrated wallet connections
- Supported rebrand and relaunch with new flows, updates, and community ops

Software Engineering Program
ALX Africa
2022 - 2023
- Completed training in data structures, algorithms, systems, and full-stack web development

SKILLS
React.js, JavaScript (ES6+), Tailwind CSS, Bootstrap, PHP, Firebase, Supabase, Next.js, TypeScript, AJAX & REST APIs, MySQL, PostgreSQL, Git & GitHub

PROJECTS
LoveView Estates: Real Estate Website for UK Property Firm. Tech: Next.js, Supabase, Tailwind CSS, TypeScript.
Complaint Management System: Internal Web App for Organizational Complaint Handling. Tech: Next.js, PostgreSQL, Tailwind CSS, TypeScript.
Developer Portfolio Website: Personal Portfolio. Tech: Next.js, Tailwind CSS, TypeScript, Vercel.
Student Result Management System (SRMS): Web App for Academic Results Management. Tech: PHP, MySQL, AJAX, Bootstrap.

CERTIFICATES
ALX Software Engineering Program (Graduate)
FreeCodeCamp: Responsive Web Design Certification
The Complete Web Development Bootcamp (Udemy - Dr. Angela Yu)

LANGUAGES
English
`
};

export const services = [
  {
    title: 'Product Web Apps',
    description: 'I design and build user-facing web apps with authentication, dashboards, and clean UX using React and Next.js.',
    icon: Code,
  },
  {
    title: 'UI Systems & Frontend',
    description: 'I craft reusable components, layouts, and interaction patterns that keep products consistent and easy to scale.',
    icon: LayoutTemplate,
  },
  {
    title: 'API & Database Engineering',
    description: 'I model data, design APIs, and integrate services to keep apps fast, secure, and reliable.',
    icon: Database,
  },
  {
    title: 'Marketplace & E-Commerce',
    description: 'Listings, search, payments, and order flows for commerce and marketplace products.',
    icon: ShoppingCart,
  },
  {
    title: 'Responsive & Performance',
    description: 'I optimize responsiveness, load times, and accessibility across devices.',
    icon: Smartphone,
  },
  {
    title: 'Content & CMS Workflows',
    description: 'I build CMS-driven experiences so teams can update content without engineering help.',
    icon: PenTool,
  },
];

export const skills = [
  { name: 'React.js', icon: '/icons/react.svg' },
  { name: 'Next.js', icon: '/icons/nextjs.svg' },
  { name: 'TypeScript', icon: '/icons/typescript.svg' },
  { name: 'JavaScript', icon: '/icons/javascript.svg' },
  { name: 'Tailwind CSS', icon: '/icons/tailwindcss.svg' },
  { name: 'Firebase', icon: '/icons/firebase.svg' },
  { name: 'Supabase', icon: '/icons/supabase.svg' },
  { name: 'PostgreSQL', icon: '/icons/postgresql.svg' },
  { name: 'PHP', icon: '/icons/php.svg' },
  { name: 'MySQL', icon: '/icons/mysql.svg' },
  { name: 'Git & GitHub', icon: '/icons/github.svg' },
  { name: 'Bootstrap', icon: '/icons/bootstrap.svg' },
  { name: 'Flutter', icon: '/icons/flutter.svg' },
];

export const experiences = [
  {
    role: 'Web Developer',
    company: 'LoveView Estates',
    period: '2024 - Present',
    description: 'Delivered a responsive real-estate website with CMS-managed listings, lead capture, and clean navigation for UK clients.',
  },
  {
    role: 'Full-Stack Developer (Freelance)',
    company: 'Self-employed',
    period: '2023 - Present',
    description: 'Built custom web apps for SMEs, handling UI design, backend logic, and deployment with dashboards, auth flows, and notifications.',
  },
  {
    role: 'Software Engineering Intern',
    company: 'Digital Technology Academy',
    period: '2024 - 2025',
    description: 'Collaborated on feature development, testing, and bug fixes across frontend and backend workstreams.',
  },
  {
    role: 'Product Developer / Community Manager',
    company: 'WheatChain Protocol',
    period: '2023 - 2025',
    description: 'Built web and Telegram mini-app experiences, integrated wallet connections, and supported a product relaunch.',
  },
  {
    role: 'Software Engineering Program',
    company: 'ALX Africa',
    period: '2022 - 2023',
    description: 'Completed a program covering programming fundamentals, data structures, algorithms, systems, and full-stack web development.',
  },
];

export const projects = [
  {
    title: 'LoveView Estates',
    description: 'Built a UK real-estate website with CMS-managed listings, lead capture, and responsive layouts to showcase properties and services.',
    stack: ['Next.js', 'Supabase', 'Tailwind CSS', 'TypeScript'],
    imageUrl: '/loveview.png',
    imageHint: 'real estate website',
    liveUrl: 'https://www.loveviewestates.co.uk/',
    githubUrl: 'https://github.com/wheat-eco/loveviewestates',
    metrics: null,
  },
  {
    title: 'Complaint Management System',
    description: 'Internal complaint system with attachments, priority routing, and a real-time admin queue to track and resolve issues.',
    stack: ['Next.js', 'PostgreSQL', 'Tailwind CSS', 'TypeScript'],
    imageUrl: '/cms.png',
    imageHint: 'dashboard interface',
    liveUrl: 'https://cts-m.vercel.app/',
    githubUrl: 'https://github.com/wheat-eco/CMS',
    metrics: null,
  },
  {
    title: 'Developer Portfolio Website',
    description: 'High-performance personal portfolio with custom animations, SEO-friendly pages, and rapid deployment.',
    stack: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Vercel'],
    imageUrl: '/icons/123455.png',
    imageHint: 'portfolio design',
    liveUrl: 'https://muiz-dev.vercel.app/',
    githubUrl: 'https://github.com/wheat-eco/Dev-port',
    metrics: null,
  },
  {
    title: 'Student Result Management System',
    description: 'Role-based portal for admins to enter grades and students to view results securely.',
    stack: ['PHP', 'MySQL', 'AJAX', 'Bootstrap'],
    imageUrl: '/AcademyIq.PNG',
    imageHint: 'student portal',
    liveUrl: 'https://academyiq.vercel.app/',
    githubUrl: 'https://github.com/PredFinance/Student-Result-Managment-System-V2',
    metrics: null,
  },
  {
    title: 'AfriConnect Exchange',
    description: 'Cross-platform marketplace with listings, escrow payments, Algolia search, messaging, notifications, onboarding, device tracking, and admin tools.',
    stack: ['Next.js', 'Expo (React Native)', 'Firebase (Auth, Firestore, Functions)', 'TypeScript', 'Tailwind CSS', 'Algolia', 'Stripe'],
    imageUrl: '/africonnect.png',
    imageHint: 'marketplace app',
    liveUrl: 'https://www.africonnect-exchange.org/',
    githubUrl: 'https://github.com/Africonnect-Exchange/Africonnect-Exchange-web',
    metrics: {
      period: 'Jan 14 – Feb 10, 2026',
      overview: [
        { label: 'Page views', value: '1,594' },
        { label: 'Sessions', value: '266' },
        { label: 'First-time visits', value: '103' },
        { label: '30-day active users (avg)', value: '228' },
      ],
      activityRange: [
        { label: '30-day active users', value: '130–577' },
        { label: '7-day active users', value: '14–65' },
        { label: 'Daily active users', value: '0–26' },
      ],
      engagement: [
        { label: 'Median engaged sessions/user', value: '1.10' },
        { label: 'Median engagement per session', value: '26.5s' },
      ],
      topPages: [
        { label: 'Homepage', value: '1,280 views' },
        { label: 'Marketplace', value: '227 views' },
      ],
      topCountries: ['GB (38)', 'US (33)', 'DE (25)', 'NG (11)'],
      source: 'Firebase Analytics',
    },
  },
];
