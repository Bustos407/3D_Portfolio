import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  //meta,
  carvajal,
  //tesla,
  //shopify,
  netcore,
  springboot,
  sql,
  aspnet,
  java,
  androidstudio,
  csharp,
  firebase,
  python,
  planpadrino,
  circa,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Mobile Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "C#",
    icon: csharp,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Firebase",
    icon: firebase,
  },

  {
    name: "Android Studio",
    icon: androidstudio,
  },
  {
    name: ".NET Core",
    icon: netcore,
  },
  {
    name: "ASP.NET",
    icon: aspnet,
  },
  {
    name: "Spring Boot",
    icon: springboot,
  },
  {
    name: "SQL",
    icon: sql,
  },
];

const experiences = [
  {
    title: "Fullstack Developer",
    company_name: "Carvajal Tecnologias y Servicios",
    icon: carvajal,
    iconBg: "#383E56",
    date: "January 2024 - July 2024",
    points: [
      "Developed and maintained backend services using .NET Core and MySQL to support business applications.",
      "Collaborated with a small development team to design and implement features, ensuring scalability and performance.",
      "Created and optimized stored procedures to improve database efficiency and reduce query execution time.",
      "Integrated the backend with the frontend, ensuring seamless data flow and API functionality.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Circa",
    description:
      "Circa is an app that simplifies buying and selling. Business accounts can add products, while regular users can browse and add them to their carts for a seamless shopping experience.",
    tags: [
      {
        name: "Flutter",
        color: "black-gradient-text",
      },
      {
        name: ".NET Core",
        color: "violet-text-gradient",
      },
      {
        name: " C#",
        color: "violet-text-gradient",
      },
      {
        name: "RestAPI",
        color: "green-text-gradient",
      },
      {
        name: "SQL",
        color: "blue-text-gradient",
      },
      {
        name: "Figma",
        color: "pink-text-gradient",
      },
    ],
    image: circa,
    source_code_link: "https://github.com/Bustos407/allforall---ecomerceBack",
  },
  {
    name: "Plan Padrino",
    description:
      "Plan Padrino is a web app that seamlessly connects university students with tutors based on their academic profile and availability, making tutoring more accessible and efficient.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "violet-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: planpadrino,
    source_code_link: "https://github.com/AMV1909/STGE-Frontend",
  },
];

export { services, technologies, experiences, testimonials, projects };
