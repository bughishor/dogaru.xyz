import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Bogdan Dogaru - Python Web Developer - Open for new projects or roles',
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Python & Front End Developer based in Crawley, West Sussex. Currently looking for new projects nationwide or local. Also open to permanent, temporary or contract roles.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Bogdan Dogaru',
  subtitle: 'Python & Front End Developer',
  cta: 'Find out more',
};

// ABOUT DATA
export const aboutData = {
  img: 'bogdan-dogaru-photo.jpg',
  paragraphOne: 'Hey! I\'m a West Sussex based Python and Front End Developer. Does that make me Full Stack? Possibly, but there is so much more to learn and to experiment with...does one actually reach that level?',
  paragraphTwo: 'I can help you with your website in many different ways. I can pick up whatever you already have or I can build you a fresh new one. From simple brochure websites to more complex, highly functional ones. Check out my CV to see what recommends me for the job.',
  paragraphThree: 'The resume should be impressive enough :) but I also do stuff in my personal time too so check out my projects below.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'bogdan-dogaru-project-gt20accounting.co.uk.jpg',
    title: 'GT20 Accounting',
    info: 'Set up the company\'s full online presence including logo, website - domain, hosting, development, content and SEO, social media, adverts design and general maintenance.',
    info2: 'Technologies: Wordpress, Photoshop',
    url: 'https://gt20accounting.co.uk',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'bogdan-dogaru-projects-aspazia.co.uk.jpg',
    title: 'Aspazia.co.uk',
    info: 'Brand building from scratch: logo, website development including custom plugins, clothing products design, social media management, advertising video and photo editing.',
    info2: 'Technologies: Wordpress, Woocommerce, JavaScript, CSS (Sass), PHP, Photoshop',
    url: 'https://aspazia.co.uk',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'bogdan-dogaru-project-score.footstats.xyz.jpg',
    title: 'ScoreBoardXYZ',
    info: 'PWA - WebApp to generate an image of a scoreboard to be used by grassroots football clubs. Fully customisable including club logo, matchday photo and colours.',
    info2: 'Technologies: Vanilla Javascript, CSS (Sass), PWA',
    url: 'https://score.footstats.xyz',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'bogdan-dogaru-project-carandtyresclinic.co.uk.jpg',
    title: 'Car & Tyres Clinic',
    info: 'Built the company\'s website including content & SEO, managing social media accounts and also took photo sessions to advertise the business.',
    info2: 'Technologies: HTML5, CSS (Sass), JavaScript, Photoshop',
    url: 'https://carandtyresclinic.co.uk',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'bogdan-dogaru-project-weyhillfc.co.uk.jpg',
    title: 'Wey Hill Football Club',
    info: 'Built the club\'s website, managing social media accounts, created video and photo adverts and regularly updating content.',
    info2: 'Technologies: Wordpress, Woocommerce, JavaScript, CSS (Sass), Photoshop',
    url: 'https://weyhillfc.co.uk',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'bogdan-dogaru-project-mystringer.co.uk.jpg',
    title: 'MyStringer.co.uk',
    info: 'Developed a new website for the business alongside with content and SEO strategies.',
    info2: 'Technologies: Wordpress, Photoshop',
    url: 'https://mystringer.co.uk',
    repo: '', // if no repo, the button will not show up
  }
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/bdogaru/',
    },
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/bogdan5dogaru',
    },
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/bogdan5dogaru',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/bogdan.d90/',
    },
  ],
};