import css from "./Footer.module.css";
import InIcon from "../../assets/in.svg";
import GmailIcon from '../../assets/gmail.svg'
const Footer = () => {
  return (
    <ul className={css.footer}>
      <li>
        <a
          href="https://www.linkedin.com/in/alicja-półtorak-6b5268248/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={InIcon}></img>
        </a>
      </li>
      <li>
      <li>
            <a href="mailto:alicjaxpoltorak@gmail.com">
            <img src={GmailIcon}></img>

                </a> 
          </li>

      </li>
    </ul>
  );
};

export default Footer;
