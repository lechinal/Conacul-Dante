import { NavLink } from "react-router-dom";
import styles from "./Footer.module.css";

import { SocialIcon } from "react-social-icons";
import logoDanteSmall from "../../assets/logo/dante-small-footer.svg";
import pin from "../../assets/svg/location-pin.svg";
import phone from "../../assets/svg/phone.svg";
import email from "../../assets/svg/mail.svg";
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.social}>
        <ul className={styles.socialList}>
          <li>
            <SocialIcon
              url="https://facebook.com"
              bgColor="#192733"
              fgColor="#b6c7d6"
            />
          </li>
          <li>
            <SocialIcon
              url="https://instagram.com"
              bgColor="#192733"
              fgColor="#b6c7d6"
            />
          </li>
          <li>
            <SocialIcon
              url="https://youtube.com"
              bgColor="#192733"
              fgColor="#b6c7d6"
            />
          </li>
          <li>
            <SocialIcon
              url="https://whatsapp.com"
              bgColor="#192733"
              fgColor="#b6c7d6"
            />
          </li>
          <li>
            <SocialIcon
              url="https://mail.google.com/"
              bgColor="#192733"
              fgColor="#b6c7d6"
            />
          </li>
        </ul>
      </div>

      <div className={styles.contact}>
        <h4>Contact</h4>
        <div className={styles.contactBox}>
          <div className={styles.contactAddress}>
            <img src={pin} alt="address" width={20} />
            <p> Strada Horea, nr. 117c - 517536, Pianu De Jos, Alba</p>
          </div>
          <div className={styles.contactPhone}>
            <img src={phone} alt="phone" width={20} />
            <p>
              <a href="tel:+40123456789">+40 123 456 789</a>
            </p>
          </div>
          <div className={styles.contactEmail}>
            <img src={email} alt="phone" width={20} />
            <p>
              <a href="mailto:contact@conaculdante.ro">
                contact@conaculdante.ro
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        <img src={logoDanteSmall} alt="smallLogo" />
        <p>Copyright © {new Date().getFullYear()} Conacul Dante</p>
      </div>

      <div className={styles.sitemap}>
        <ul className={styles.sitemapList}>
          <li>
            <NavLink to="/">Acasa</NavLink>
          </li>
          <li>
            <NavLink to="aboutUs">Despre Noi</NavLink>
          </li>
          <li>
            <NavLink to="/services">Servicii</NavLink>
          </li>
          <li>
            <NavLink to="/booking">Rezervari</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
