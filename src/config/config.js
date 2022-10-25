module.exports = {
  githubRepo: "https://github.com/andrikop13/my-portofolio",
  passwordRegex: () => {
    return /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/;
  },
  emailRegex: () => {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  },

  URL_CONFIG: {
    users: {
      login: "api/v1/users/login",
    },
    jobs: {
      crudURL: "api/v1/jobs",
    },
    projects: {
      crudURL: "api/v1/projects",
    },
    baseURLs: {
      hero: "/",
      login: "/admin/login",
      dashboard: "/admin/dashboard",
      projects: "/admin/projects",
      newProject: "/admin/projects/newProject",
      newJob: "/admin/jobs/newJob",
      jobs: "/admin/jobs",
    },
  },
  // Limits in rem
  responsive: {
    baseDivider: 10,
    phone: [0, 60],
    tablet: [60, 100],
    tabletLandscape: [90, 120],
    bigDesk: [180],
  },

  navMenu: [
    {
      name: "About",
      url: "/#about",
    },
    {
      name: "Experience",
      url: "/#experience",
    },
    {
      name: "Projects",
      url: "/#projects",
    },
    {
      name: "Contact",
      url: "/#contact",
    },
  ],

  myLocationLatLon: [38.2466, 21.7346],

  myProfileImgUrl:
    "https://res.cloudinary.com/ds6z8fknm/image/upload/v1666633093/myself_sm_r9eon4.webp",

  myProfileGitHubUrl:
    "https://raw.githubusercontent.com/andrikop13/my-portfolio/firebase-platform/src/assets/images/myself_sm.webp",
};
