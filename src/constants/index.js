import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    c ,
    mern,
    threejs,
    tableau,
    
  } from "../assets";

  // import {
  //   Cars,
  //   Tshirt,
  //   News,
  // } from '../../public'

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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "MERN Stack",
      icon: backend,
    },
    {
      title: "C++",
      icon: mobile,
    },
    {
      title: "Three.js",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
      link: 'https://html.com/html5/',
    },
    {
      name: "CSS 3",
      icon: css,
      link: 'https://www.w3.org/Style/CSS/Overview.en.html',
    },
    {
      name: "JavaScript",
      icon: javascript,
      link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction',
    },
    {
      name: "React JS",
      icon: reactjs,
      link: 'https://react.dev/',
    },
    {
      name: "Redux Toolkit",
      icon: redux,
      link: 'https://redux-toolkit.js.org/',
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
      link: 'https://tailwindcss.com/',
    },
    {
      name: "Node JS",
      icon: nodejs,
      link: 'https://nodejs.org/en',
    },
    {
      name: "MongoDB",
      icon: mongodb,
      link: 'https://www.mongodb.com/',
    },
    {
      name: "Three JS",
      icon: threejs,
      link: 'https://threejs.org/',
    },
    {
      name: "C++",
      icon: c,
      link: 'https://cplusplus.com/doc/tutorial/',
    },
    {
      name: "Tableau",
      icon: tableau,
      link: 'https://www.tableau.com/',
    },
    {
      name: "git",
      icon: git,
      link: 'https://github.com'
    }
  ];
  
  const experiences = [
    {
      title: "C++, HTML/CSS/JS",
      icon: c,
      iconBg: "#383E56",
      date: "Since Jan 2021",
    },
    {
      title: "React.js Developer",
      icon: reactjs,
      iconBg: "#E6DEDD",
      date: "Since Jun 2022 ",
    },
    {
      title: "Full stack Developer",
      icon: mern ,
      iconBg: "#383E56",
      date: "Since Feb 2023 ",
    },
    {
      title: "THREE/NEXT.js",
      icon: threejs,
      iconBg: "#E6DEDD",
      date: "Since Oct 2023",
    },
    {
      title: "Aasan Mart- Website developer",
      icon: reactjs,
      iconBg: "#383E56",
      date: "13/9/24 - 13/11/24",
    }
  ];
  
  
  const projects = [
    {
      name: "Car Rental",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Three",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: './Cars.png',
      source_code_link: "https://github.com/Shre-coder22",
    },
    {
      name: "News-Website",
      description:
        "Stay informed with Global-News, your go-to news website featuring diverse categories and personalized content. Save articles, customize your feed, and never miss a story that matters to you.",
      tags: [
        {
          name: "React/MERN Stack",
          color: "blue-text-gradient",
        },
        {
          name: "News-Api",
          color: "green-text-gradient",
        },
        {
          name: "BootStrap",
          color: "pink-text-gradient",
        },
      ],
      image: './News.png',
      source_code_link: "https://github.com/Shre-coder22",
    },
    {
      name: "3-D Shirt Design Website",
      description:
        "Design your perfect shirt with Shoppers, where you can fully customize logos, colors, and designs in a 3D interactive experience. Create unique apparel that reflects your style effortlessly.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Three",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: './T-shirt.png',
      source_code_link: "https://github.com/Shre-coder22",
    },
  ];
  
  export { services, technologies, experiences, projects };