import { useState } from "react";

const ButtonToTop = () => {
  const [showButtonTop, setShowButtonTop] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleEndOfHero = () => {
    const clientHeight = document.querySelector("#hero-section")?.offsetHeight;
    if (!clientHeight) return;
    if (window.pageYOffset >= clientHeight) {
      !showButtonTop && setShowButtonTop(true);
    } else {
      showButtonTop && setShowButtonTop(false);
    }
  };

  window.addEventListener("scroll", handleEndOfHero);

  return (
    <button
      className="button-totop"
      onClick={scrollToTop}
      style={{ display: showButtonTop ? "block" : "none" }}
    >
      <svg
        width="24"
        height="24"
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#fff"
      >
        <path
          d="M23.245 20l-11.245-14.374-11.219 14.374-.781-.619 12-15.381 12 15.391-.755.609z"
          fill="var(--green)"
        ></path>
      </svg>
    </button>
  );
};

export default ButtonToTop;
