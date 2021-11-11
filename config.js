const REPOSITORY = 'gatsby-resume-template';
const FIRST_NAME = 'Ashland';
const LAST_NAME = 'Gravil';
// const TWITTER_USERNAME = 'awesome-developer'; 
const LINKEDIN_USERNAME = 'ashlandg';
const PHONE_NUMBER = '407-517-8604';
const ADDRESS = 'Orlando, Fl';
const EMAIL = 'ashlandg2000@gmail.com';
const FOOTER_URL = '';

const BIO = `
Hi there! I’m Ashland Gravil.

I am a passionate designer, artist, creator, and thinker. Along with my excellent communication skills, both written and oral, I am interested in executing projects, writing press releases, and strengthening my programming skills. 
My interests in design specifically include technological design, UI/UX design and graphic design.`;

const EXPERIENCE_LIST = [
  {
    title: 'PwC Externship',
    company: 'PwC',
    description: `
    Analyze and evaluate challenges from non-profit organizations using consulting frameworks to help solve important business problems such as development, impact assessment, policy issues, and strategic positions.`,
    period: 'June 2021 - August 2021',
  },
  {
    title: 'Product Strategist Intern',
    company: 'Turnitin, LLC',
    description: `
      Conducted in-depth research of higher education learning with internal and external stakeholders to implement new strategies in
      product development at a growing EdTech company.`,
    period: 'June 2021 - August 2021',
  },
  {
    title: 'SharePoint Online Developer Intern',
    company: 'Pfizer Inc.',
    description: `
      Assessed the current site landscape, subsites, content and permissions to design the site with a simplified layout within the Clinical
      Supply Strategy and Management (CSSM) line.`,
    period: 'May 2021 - August 2021',
  },
  {
    title: 'Career and Technical Education Summer Intern',
    company: 'Orange County Public Schools',
    description: `
      Assisted the LaunchEd program in the areas of diagnosing non-functioning devices, cleaning and preparing devices
      for distribution and inventory tasks that has helped schools prepare for the upcoming school year.
      Helped foster an increase in student interaction, boost employee and student leadership and create efficient
      learning opportunities.`,
    period: 'January 2017 - August 2017',
  },
  {
    title: 'Barista and Food Server',
    company: 'Panera Bread',
    description: `
      Communicated clearly and positively with coworkers and management while maintaining high standards of
      customer service during high volume, fast-paced operations.
      Following procedures for safe food preparation, assembly, and presentations under company guidelines.`,
    period: 'June 2017 - August 2017',
  },
];

const LEADERSHIP = [
  {
    title: 'Marketing Director',
    company: 'Association of Latino Professionals for America (ALPFA)',
    description: `
      Stimulate awareness of ALPFA throughout UF by creating slides for the Business School TV and Undergraduate Newsletter while
      creating content for ALPFAUF social media platforms.`,
    period: 'January 2019 - Present',
  },
  {
    title: 'Design Summit',
    company: 'Facebook Design',
    description: `
      Developed user interface skills through in-depth portfolio reviews.
      Researched emerging markets and factors that influenced it such as: developing infrastructure, language diversity,
      extreme gender disparities, etc.`,
    period: 'June 2020',
  },
];

const EDUCATION_LIST = [
  {
    institution: 'University of Florida',
    qualification: 'Bachelor of Science in Advertising',
    description: `I'm currently attending the University of Florida to obtain a Bachelor of Science degree in Advertising with a focus in Persuasive Messaging. 
    I’m willing to sharpen and even broaden my understanding to best prepare and equip me for a rewarding career in Advertising.`,
    period: '2018-2022',
  },
];

const LANGUAGES_AND_TOOLS = [
  { name: 'HTML5', iconClass: 'fa-html5' },
  { name: 'CSS3', iconClass: 'fa-css3-alt' },
  { name: 'Javascript', iconClass: 'fa-js-square' },
];

const SKILLS = [
  'Certified Internet Web Professional (CIW Internet business associate),',
  'Microsoft Office 365 Suite',
  'Adobe Certified Associate',
  'Persuasive Messaging',
  'Public Speaking',
  'Microsoft Sharepoint Designer',
  'Content Strategy'
];

const PORTFOLIO = {
  items: [
    {
      title: 'Pfizer Summer Student Worker Program',
      img: 'pfizer.png',
      description: `I assisted Pfizer by working with the Clinical Supply Strategy & Management line, to create a better user interface for their SharePoint site. My role included: an assessment of the current site landscape, sub-sites, pages, content and permissions, and working with content owners to clean up existing content. To respect NDA policies, certain content has been omitted.`,
      url: '/Pfizer_SharePoint_Developer.pdf'
    },
    {
      title: 'Turnitin Product Strategist',
      img: 'turnitin.png',
      description: `One of my roles included an investigation into PeerMark, a foundational product at Turnitin that has gone through all life-cycle changes. I created a summative report and analysis of potential features that will help PeerMark remain a market leader in the industry. To respect NDA policies, certain information and data has been omitted.`,
      url: '/PeerMark2021.pdf'
    },
    {
      title: 'MealKit Delivery Service',
      img: 'mealkit.png',
      description: `I participated in creating an advertising strategy for Home Chef, a meal-kit and delivery service. My role was, but not limited to: researching data that is going on within the industry and company to create a comprehensive situation analysis. I identified the problems and opportunities to create an opportunities recommendation.`,
      url: '/MealKit_Plansbook.pdf'
    },
    {
      title: 'Graphic Design Content for ALPFA',
      img: 'alpfauf.jpeg',
      description: `As the marketing director for ALPFA UF, I created graphic designs to be posted on social media sites such as Instagram, Linked, Facebook, and GroupMe. From our interactions on Instagram, I looked into the insights and analytics to see how the branded content increased user engagement.`,
      url:
        '/ALPFA_Graphics.pdf',
    },
    {
      title: 'Tesla Brand Analysis',
      img: 'tesla.png',
      description: `In Progress: I developed a social media marketing plan with a focus on branding, and the impact of social media on a brand. My role was, but not limited to in-depth research to complete a situation analysis on the marketing trends that is influencing the market position of Tesla. I researched the social media zones of Tesla, to then help my team create a social experience strategy.`,
      url: '/Tesla_Brand_Analysis.pdf'
    },
    {
      title: 'Press Release + Business Analyses',
      img: 'press-release.jpg',
      description: `My trade journals press releases and business analyses using advertising strategies`,
      url: '/Business_Analysis_Press_Release.pdf',
    },
    {
      title: 'Content Marketing Strategy',
      img: 'cookie.png',
      description: `My content marketing strategy campaign for 'Midnight Cookies', a local cookie shop.`,
      url:
        'https://48d0217e-e1a1-41bc-945a-41b4f1c7a589.filesusr.com/ugd/e0f0a8_e2a01bd6457f41f1b2d90c38fa8cf8b3.pdf',
    },
    {
      title: 'Place-Based Branding',
      img: 'shock.jpg',
      description: `My place-based branding piece on the Multicultural and Diversity Affairs at the University of Florida`,
      url: 'https://spark.adobe.com/page/zTTehIoJTHoHh/',
    },
  ],
};

const CERTIFICATIONS = [
  'Certification 1',
  'Certification 2',
  'Certification 3',
  'Award 1',
  'Award 2',
];

module.exports = {
  siteTitle: `${FIRST_NAME} ${LAST_NAME} Resume`, // <title>
  manifestName: `${FIRST_NAME} ${LAST_NAME} Resume`,
  manifestShortName: 'Resume', // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: '#663399',
  manifestThemeColor: '#663399',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/images/profile.jpg',
  plugins: [`gatsby-plugin-fontawesome-css`],
  pathPrefix: `/${REPOSITORY}`, // This path is subpath of your hosting https://domain/portfolio
  firstName: FIRST_NAME,
  lastName: LAST_NAME,
  // bio
  bio: BIO,
  // experience
  experienceList: EXPERIENCE_LIST,
  // education
  educationList: EDUCATION_LIST,
  // languages & tools
  langTools: LANGUAGES_AND_TOOLS,
  // skills
  skills: SKILLS,
  // certifications
  certifications: CERTIFICATIONS,
  // portfolio
  portfolio: PORTFOLIO,

  leadership: LEADERSHIP,
  // social
  socialLinks: [
    // {
    //   icon: 'fa-github',
    //   name: 'Github',
    //   url: `https://github.com/${GITHUB_USERNAME}`,
    // },
    {
      icon: 'fab fa-linkedin-in',
      name: 'Linkedin',
      url: `https://linkedin.com/in/${LINKEDIN_USERNAME}`,
    },
    {
      icon: 'fab fa-instagram',
      name: 'instagram',
      url: 'https://www.instagram.com/ashlandx3/'
    },
    {
      icon: 'fas fa-file',
      name: 'Resume',
      url: `/Ashland_Gravil_Resume.pdf`,
    },
  ],
  email: EMAIL,
  phone: PHONE_NUMBER,
  address: ADDRESS,
  footerUrl: FOOTER_URL,
};
