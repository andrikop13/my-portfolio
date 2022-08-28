import { githubRepo, responsive } from "@config";
import { useWindowSize } from "@hooks";
import { SideSocial } from "@components/layout";

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
