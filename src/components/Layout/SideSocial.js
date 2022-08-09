import { VscGithubAlt } from "react-icons/vsc";
import { BsInstagram } from "react-icons/bs";
import { FiLinkedin } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { SiGmail } from "react-icons/si";
import { socialMedia } from "../../content/content";

const iconSize = 21;
const iconSizeSm = 19;
const iconColor = "var(--light-slate)";

const SideSocial = () => {
  return (
    <div className="socials-sidebar">
      <ul>
        <li>
          <a href={`mailto:${socialMedia.email.url}`}>
            <SiGmail size={iconSizeSm} color={iconColor} />
          </a>
        </li>
        <li>
          <a
            href={socialMedia.github.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <VscGithubAlt size={iconSize} color={iconColor} />
          </a>
        </li>
        <li>
          <a
            href={socialMedia.linkedIn.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiLinkedin size={iconSize} color={iconColor} />
          </a>
        </li>
        <li>
          <a
            href={socialMedia.twitter.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiTwitter size={iconSize} color={iconColor} />
          </a>
        </li>
        <li>
          <a
            href={socialMedia.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsInstagram size={iconSize} color={iconColor} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideSocial;
