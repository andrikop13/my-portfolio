module.exports = {
  githubRepo: "https://github.com/andrikop13/my-portofolio",
  passwordRegex: () => {
    return /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!#$%&?]{8,20}$/;
  },
  emailRegex: () => {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  },

  URL_CONFIG: {
    login:
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword",
    baseURLs: {
      login: "/admin/login",
      dashboard: "/admin/dashboard",
      projects: "/admin/projects",
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
};
