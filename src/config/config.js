module.exports = {
  email: "andreas.andrikopoulos@gmail.com",

  // Limits in rem
  responsive: {
    baseDivider: 10,
    phone: [0, 60],
    tablet: [60, 100],
    tabletLandscape: [90, 120],
    bigDesk: [180],
  },

  socialMedia: [
    {
      name: "GitHub",
      url: "https://github.com/andrikop13",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/a_andrikop_/",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/andrikop13",
    },
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/a-andrikopoulos/",
    },
  ],

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

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: "bottom",
    distance: "20px",
    duration: 500,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    delay,
    easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    mobile: true,
    reset: false,
    useDelay: "always",
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
