import linkedin from "../assets/Linkedin Icon.png";
import github from "../assets/GitHub Icon.png";
import facebook from "../assets/Facebook Icon.png";
import instagram from "../assets/Instagram Icon.png";
import twitter from "../assets/Twitter Icon.png";

function Footer() {
  return (
    <footer>
      <div className="social-media">
        <a
          href="https://www.linkedin.com/in/username"
          target="_blank"
          rel="noreferrer">
          <img src={linkedin} alt="linkedin" />
        </a>
        <a href="https://www.github.com/username" target="_blank" rel="noreferrer">
          <img src={github} alt="github" />
        </a>
        <a href="https://www.facebook.com/username" target="_blank" rel="noreferrer">
          <img src={facebook} alt="facebook" />
        </a>
        <a href="https://www.instagram.com/username" target="_blank" rel="noreferrer">
          <img src={instagram} alt="instagram" />
        </a>
        <a href="https://www.twitter.com/username" target="_blank" rel="noreferrer">
          <img src={twitter} alt="twitter" />
        </a>


      </div>
    </footer>
  );
}

export default Footer;
