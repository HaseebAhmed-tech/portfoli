import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiFlutter,
  SiMongodb,
  SiPython,
  SiFirebase,
  SiDocker,
  SiKeras,
  SiPycharm,
} from "react-icons/si";

export const navTabs = [
  { name: "home", path: "/home" },
  { name: "services", path: "/home/services" },
  { name: "resume", path: "/home/resume" },
  { name: "work", path: "/home/work" },
  { name: "contact", path: "/home/contact" },
];

export const socials = [
  {
    name: "Instagram",
    id: "instagram",
    icon: <FaInstagram />,
    link: "https://www.instagram.com/",
  },
  {
    id: "linkedin",
    name: "LinkedIn",
    icon: <FaLinkedin />,
    link: "https://www.linkedin.com/",
  },
  {
    id: "github",
    name: "GitHub",
    icon: <FaGithub />,
    link: "https://www.github.com/",
  },
];

export const stats = [
  {
    num: 12,
    text: "Years of Experience",
  },
  {
    num: 10,
    text: "Projects Completed",
  },
  {
    num: 8,
    text: "Technologies Mastered",
  },
  {
    num: 10,
    text: "Code Commits",
  },
];

export const services = [
  {
    num: 1,
    title: "Web Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias minima eaque voluptates a!",
    href: "",
  },
  {
    num: 2,
    title: "Application Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias minima eaque voluptates a!",
    href: "",
  },
  {
    num: 3,
    title: "Backend Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias minima eaque voluptates a!",
    href: "",
  },
  {
    num: 4,
    title: "Artificial Intelligence",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias minima eaque voluptates a!",
    href: "",
  },
];

export const about = {
  title: "About Me",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias minima eaque voluptates a! Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias minima eaque voluptates a!",
  info: [
    { filename: "Name", feildValue: "Haseeb Ahmed" },
    { filename: "Phone", feildValue: "03044630011" },
    { filename: "Experince", feildValue: "2+ Years" },
    { filename: "GitHub", feildValue: "Haseeb-Ahmed-Tech" },
    { filename: "Nationality", feildValue: "Pakistani" },
    { filename: "Email", feildValue: "hbmz4812@gmail.com" },
    { filename: "Freelance", feildValue: "Available" },
    { filename: "Languages", feildValue: "English, Urdu, German" },
  ],
};

export const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My Experience",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  items: [
    {
      comapany: "Cognitive Healthcare Int.",
      position: "Application Dev. Intern",
      duration: "June 2023 - August 2023",
    },
    {
      comapany: "Spectreco",
      position: "Full Stack Dev.",
      duration: "September 2024 - Present",
    },
    {
      comapany: "EaseTour",
      position: "Freelance App Dev.",
      duration: "Dec 2023 - Apr 2023",
    },
    {
      comapany: "3D Model Automation",
      position: "Final Year Project",
      duration: "Jan 2024 - Jun 2024",
    },
  ],
};

export const education = {
  icon: "/assets/resume/cap.svg",
  title: "My Education",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  items: [
    {
      degree: "Bachelor of Software Engineering",
      institute: "NUST Islamabad",
      duration: "2020 - 2024",
    },
    {
      degree: "Intermediate",
      institute: "Govt. College Lahore",
      duration: "2018 - 2020",
    },
    {
      degree: "Machine Learning Specialization",
      institute: "Coursera",
      duration: "2023 - 2023",
    },
    {
      degree: "Flutter Master",
      institute: "Udemy",
      duration: "2024 - 2024",
    },
    {
      degree: "Bloc State Management",
      institute: "Udemy",
      duration: "2023 - 2023",
    },
    {
      degree: "NextJs",
      institute: "Youtube",
      duration: "2024 - 2024",
    },
  ],
};

export const skills = {
  title: "My Skills",
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  skillList: [
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3 />, name: "CSS3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiNextdotjs />, name: "NextJs" },
    { icon: <FaNodeJs />, name: "NodeJs" },
    { icon: <SiTailwindcss />, name: "Tailwind" },
    { icon: <SiFlutter />, name: "Flutter" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiPython />, name: "Python" },
    { icon: <SiFirebase />, name: "Firebase" },
    { icon: <SiDocker />, name: "Docker" },
    { icon: <SiKeras />, name: "Keras" },
    { icon: <SiPycharm />, name: "PyCharm" },
  ],
};

export const projects = [
  {
    num: "01",
    category: "App Development",
    title: "EaseTour",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias minima eaque voluptates a!",
    stack: [
      {
        name: "Flutter",
      },
      {
        name: "Firebase",
      },
      {
        name: "Provider",
      },
      {
        name: "Google Maps",
      },
    ],
    image: "/assets/work/thumb1.png",
    live: "",
    github: "https://github.com/ALIRAZA17/EaseTour.git",
  },
  {
    num: "02",
    category: "Full Satck",
    title: "Portfolio",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias minima eaque voluptates a!",
    stack: [
      {
        name: "NextJs",
      },
      {
        name: "MongoDB",
      },
      {
        name: "ExpressJs",
      },
      {
        name: "Motion Framer",
      },
    ],
    image: "/assets/work/thumb2.png",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "App Development",
    title: "Moviefy",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias minima eaque voluptates a!",
    stack: [
      {
        name: "Flutter",
      },
      {
        name: "Mqtt",
      },
      {
        name: "Bloc",
      },
    ],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "",
  },
];

export const info = [
  { icon: <FaPhoneAlt />, text: "03044630011", title: "Phone" },
  { icon: <FaEnvelope />, text: "hbmz4812@gmail.com", title: "Email" },
  { icon: <FaMapMarkerAlt />, text: "Lahore, Pakistan", title: "Address" },
];
