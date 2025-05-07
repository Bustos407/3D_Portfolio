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
  carvajal,
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
  weatherwise,
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
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "Python", icon: python },
  { name: "Java", icon: java },
  { name: "C#", icon: csharp },
  { name: "React JS", icon: reactjs },
  { name: "Redux Toolkit", icon: redux },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
  { name: "figma", icon: figma },
  { name: "docker", icon: docker },
  { name: "Firebase", icon: firebase },
  { name: "Android Studio", icon: androidstudio },
  { name: ".NET Core", icon: netcore },
  { name: "ASP.NET", icon: aspnet },
  { name: "Spring Boot", icon: springboot },
  { name: "SQL", icon: sql },
];

const experiences = [
  {
    title: "Fullstack Developer",
    company_name: "Carvajal Tecnologias y Servicios",
    icon: carvajal,
    iconBg: "#383E56",
    date: "January 2024 - July 2024",
    points: [
      "Developed and maintained backend services using .NET Core and MySQL.",
      "Collaborated with a small team to design and implement features.",
      "Created and optimized stored procedures to improve database efficiency.",
      "Integrated backend with frontend ensuring seamless API functionality.",
    ],
  },
];

const projects = [

  {
    name: "WeatherApp",
    description:
      "Fullstack weather application with real-time data, search autocomplete, and favorites management using external API integration.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "TypeScript", color: "blue-text-gradient" },
      { name: "Express.js", color: "violet-text-gradient" },
      { name: "MySQL", color: "blue-text-gradient" },
      { name: "REST API", color: "green-text-gradient" },
      { name: "WeatherAPI", color: "pink-text-gradient" },
    ],
    image: weatherwise, // Asegúrate de importar la imagen
    source_code_link: "https://github.com/Bustos407/weather_app_backend",
  },
  {
    name: "Circa",
    description:
      "E-commerce platform where businesses can add products and users can buy them easily.",
    tags: [
      { name: "Flutter", color: "black-gradient-text" },
      { name: ".NET Core", color: "violet-text-gradient" },
      { name: "C#", color: "violet-text-gradient" },
      { name: "RestAPI", color: "green-text-gradient" },
      { name: "SQL", color: "blue-text-gradient" },
      { name: "Figma", color: "pink-text-gradient" },
    ],
    image: circa,
    source_code_link: "https://github.com/Bustos407/allforall---ecomerceBack",
  },
  {
    name: "Plan Padrino",
    description:
      "A tutoring platform that connects university students with academic mentors.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "TypeScript", color: "blue-text-gradient" },
      { name: "restapi", color: "green-text-gradient" },
      { name: "nodejs", color: "violet-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    image: planpadrino,
    source_code_link: "https://github.com/AMV1909/STGE-Frontend",
  },
];

export { services, technologies, experiences, projects };
