import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

export default function Footer(props) {
  return (
    <div className="bg-yellow-300 py-2 text-center w-full bottom-0">
      <div>
        <Link
          href="www.linkedin.com/in/sherif-mansour-4b4282267"
          target="_blank"
          rel="noopener noreferrer"
          title="Linkedin"
          className="mx-4 hover:text-blue-600"
        >
          <FontAwesomeIcon icon={faLinkedin} className="fa-2xl" />
        </Link>
        <Link
          href="https://github.com/Sherif-Mansour"
          target="_blank"
          rel="noopener noreferrer"
          title="Github"
          className="mx-4 hover:text-blue-600"
        >
          <FontAwesomeIcon icon={faGithub} className="fa-2xl" />
        </Link>
      </div>
      <br />
      <div>
        <p className="copyright footer-link">© 2024 Sherif Mansour.</p>
      </div>
    </div>
  );
}
