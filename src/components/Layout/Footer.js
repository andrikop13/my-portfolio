import { githubRepo } from "../../config/config";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <a href={githubRepo} target="_blank" rel="noopener noreferrer">
          ©2022 - Designed and built by Andreas Andrikopoulos
        </a>
      </div>
    </footer>
  );
};

export default Footer;
