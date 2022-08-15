import { githubRepo, responsive } from "../../config/config";
import { useWindowSize } from "../../hooks/use-window_size";
import SideSocial from "./SideSocial";

const Footer = () => {
  const { isMobile } = useWindowSize(responsive.tablet[1]);

  return (
    <footer className="footer">
      <div className="flexRow">
        {isMobile && <SideSocial flexRow={true} iconSize={19} />}
        <div>
          <a href={githubRepo} target="_blank" rel="noopener noreferrer">
            ©2022 - Designed and built by Andreas Andrikopoulos
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
