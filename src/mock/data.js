import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Aksara Venture', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'jason.jpeg',
    title: 'Jason Pard',
    info:
      "Jason was previously an Analyst at Venture Capital firm Monk's Hill Ventures and had prior experience as Product Manager at Gojek and smaller startups. He graduated from University of Illinois at Urbana Champaign with a degree in Mechanical Engineering.",
    info2: '',
    url: 'https://www.linkedin.com/in/jasonpardliew/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'gilbert.jpeg',
    title: 'Gilbert Lityo',
    info: 'Gilbert is an all round amazing person',
    info2: '',
    url: 'https://www.linkedin.com/in/gilbertlityo/',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'stefanus.jpg',
    title: 'Stefanus Hinardi',
    info:
      'Stefanus is a product manager at Microsoft Azure. Previously, he was a Software Engineer at Amazon Web Services where he helped built next generation NLP product. He earned his bachelor degree in Computer Science from University of Illinois at Urbana Champaign and master degree in Computer Science from University of California Berkeley.',
    info2: '',
    url: 'https://www.linkedin.com/in/stefanus-hinardi-591570a2/',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'jasonpardliew@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'linkedin',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'github',
    //   url: '',
    // },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
