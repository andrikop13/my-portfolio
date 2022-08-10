const disPath = "./content/images/dis";
const dashPath = "./content/images/dashboards";
const slPath = "./content/images/street-lighting";
const thesisPath = "./content/images/master-thesis";
const portfolioPath = "./content/images/portfolio";
const nodeApiPath = "./content/images/nodejs";

const DIS_LIMIT = 6;
const DASH_LIMIT = 5;
const SL_LIMIT = 6;
const MT_LIMIT = 5;

module.exports = {
  skills: [
    { value: "Javascript (ES6+)", weight: 30 },
    { value: "Typescript", weight: 30 },
    { value: "Angular", weight: 30 },
    { value: "RxJS", weight: 30 },
    { value: "NgRx", weight: 15 },
    { value: "React", weight: 30 },
    { value: "Redux", weight: 20 },
    { value: "HTML5", weight: 30 },
    { value: "CSS3", weight: 30 },
    { value: "SCSS", weight: 30 },
    { value: "PrimeNg", weight: 20 },
    { value: "Nebular", weight: 20 },
    { value: "Bootstrap", weight: 20 },
    { value: "Git", weight: 30 },
    { value: "NodeJS", weight: 15 },
    { value: "Python", weight: 15 },
    { value: "PySpark", weight: 15 },
  ],

  jobs: [
    {
      position: "Software Engineer",
      organization: "Hellenic Army IT Support Centre",
      descriptionItems: [
        "Web application development with Angular 13 Framework and UI libraries like Bootstrap, PrimeNg and Nebular for Greek army use cases.",
        "I contributed to an online application development for the creation and collection  of a high number of documents and materials that records important events in Hellenic history.",
        "I contributed to an in house application development for the creation of the boarding cards of the officers of the Greek Army as well as the monitoring of statistical data.",
      ],
      date: "Feb 2022 - October 2022",
      link: "http://army.gr/el/organosi/monades-ypiresies/kentro-pliroforikis-ypostirixis-ellinikoy-stratoy-kepyes",
    },
    {
      position: "Software Engineer",
      organization: "Meazon S.A.",
      descriptionItems: [
        "User interface development for company’s IoT platform using Angular, JavaScript, jQuery, HTML, Bootstrap, CSS, capable of visualizing real time data from IoT devices like energy meters, sensors and light controllers.",
        "RESTful APIs development that serve data to our JavaScript front-end based on dynamically chosen user inputs using Node.js and Express  framework (via our platform’s hybrid DB engine: Cassandra & PostgreSQL).",
        "IoT Platform Administration & Management on Thingsboard IoT platform.",
        "Communicated and collaborated with multi-disciplinary teams of engineers, producers and clients, on a daily basis",
      ],
      date: "Jun 2018 - Oct 2021",
      link: "https://meazon.com/",
    },
    {
      position: "Software Engineer",
      organization: "Meazon S.A. (Internship)",
      descriptionItems: [
        "Application Development (LW2M2 Iot Protocol Usage) for bi-directional communication between Power meters and cloud gateway (C, C++)",
      ],
      date: "Mar 2018 - May 2018",
      link: "https://meazon.com/",
    },
    {
      position: "Teacher Assistant",

      organization: "CEID - University of Patras",
      descriptionItems: [
        "Worked with the professor and in conjunction with other teacher assistants ensure collaboration in helping students learn Object-Oriented Programming (Java) and Databases (MySQL)",
      ],
      date: "Oct 2020 - Sep 2021",
      link: "https://www.ceid.upatras.gr/en",
    },
  ],

  projects: [
    {
      title: "National archives",
      subtitle: "Hellenic Army Project",
      description:
        "An online web application for the creation and collection of a high number of documents and materials that records important events in Hellenic history. Greek army is responsible to preserve and maintain these materials and makes them available for research to the audience.",
      images: [
        ...[...Array(DIS_LIMIT).keys()].map(
          (num) => `${disPath}/dis-${num}.png`
        ),
      ],
      technologies_used: ["Angular 13", "RxJS", "BootStrap 5", "PrimeNg"],
    },
    {
      title: "Street Lighting",
      subtitle: "Meazon Pilot Project",
      description:
        "A scalable street lighting solution template integrated in ThingsBoard IoT platform, that achieve complete control over a city lighting infrastructure and realize exceptional energy savings.",
      images: [
        ...[...Array(SL_LIMIT).keys()].map((num) => `${slPath}/sl-${num}.png`),
      ],
      technologies_used: ["Angular 13", "RxJS", "BootStrap 5"],
      link: "https://mi6.meazon.com/login",
    },
    {
      title: "Esmart City",
      subtitle: "Meazon Project",
      description:
        "A smart application that interconnects and visualize public buildings of the regional unit of Achaia, for the energy management and monitoring, through the installation of smart energy devices, such as smart meters, smart plugs and sensors.",
      images: [
        ...[...Array(DASH_LIMIT).keys()].map(
          (num) => `${dashPath}/dash-${num}.png`
        ),
      ],
      technologies_used: [
        "Angular 13",
        "RxJS",
        "SCSS",
        "BootStrap 5",
        "Node.js",
      ],
      link: "https://mi6.meazon.com/login",
    },
    {
      title: "Master Thesis",
      description:
        "Entity Linking with deep learning networks and community prediction methods, leveraging a knowledge base with 20 million Wikipedia articles and 93 million Wikidata items.",
      images: [
        ...[...Array(MT_LIMIT).keys()].map(
          (num) => `${thesisPath}/mt-${num}.png`
        ),
      ],
      technologies_used: ["Spark", "PySpark", "Python"],
      link: "https://nemertes.library.upatras.gr/jspui/handle/10889/14955",
    },
    {
      title: "Personal Portfolio",
      subtitle: "Personal Project",
      description:
        "My personal portfolio, written with modern Javascript Frameworks and Libraries, such as React, Redux, Material UI, and more.",
      images: [`${portfolioPath}/portfolio.png`],
      technologies_used: ["React", "Material UI", "SCSS"],
      link: "https://andrikopoulosdev.eu",
      github: "https://github.com/andrikop13/my-portofolio",
    },
    {
      title: "REST API",
      subtitle: "Meazon Project",
      description:
        "REST API that is interconnected with company's platform and leverages Firebase Cloud Messaging and it's real databases to send notifications to company app users.",
      images: [`${nodeApiPath}/restApi.png`],
      technologies_used: ["Node.js", "Express", "Firebase", "Nginx"],
    },
  ],

  socialMedia: {
    github: {
      name: "GitHub",
      url: "https://github.com/andrikop13",
    },
    instagram: {
      name: "Instagram",
      url: "https://www.instagram.com/a_andrikop_/",
    },
    twitter: {
      name: "Twitter",
      url: "https://twitter.com/andrikop13",
    },
    linkedIn: {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/a-andrikopoulos/",
    },
  },
};
