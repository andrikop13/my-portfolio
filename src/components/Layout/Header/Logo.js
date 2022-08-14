const Logo = () => {
  return (
    <div className="logo" tabIndex="-1">
      <a href="/" aria-label="home">
        <div className="flexRow">
          <div className="logoText">A</div>
          <div className="text-column">
            <div className="nameText">Andrikopoulos</div>
            <div className="jobTitle">Web Developer</div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default Logo;
