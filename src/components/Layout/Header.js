import { Link } from "react-router-dom";
import MyLogo from "../../assets/icons/MyLogo";
import { navMenu } from "../../config/config";

const Header = (props) => {
  const Logo = (
    <div className="logo" tabIndex="-1">
      {props.isHome ? (
        <a href="/" aria-label="home">
          <MyLogo stroke={12} fontWeight={550} />
        </a>
      ) : (
        <Link to="/" aria-label="home">
          <MyLogo stroke={8} />
        </Link>
      )}
    </div>
  );

  const Resume = (
    <a
      className="resume-button small-button"
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
    >
      Resume
    </a>
  );

  return (
    <header>
      <nav>
        {Logo}
        <div className="nav--links">
          <ol>
            {navMenu &&
              navMenu.map((nav, index) => (
                <li key={index}>
                  <Link to={nav.url}>{nav.name}</Link>
                </li>
              ))}
          </ol>
          <div>{Resume}</div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
