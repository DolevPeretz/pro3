import PageLinks from "./PageLinks";
import SocialLink from "./SocialLink";
const Footer = () => {
  return (
    <footer className="section footer">
      <PageLinks parentClass="footer-links" itemClass="footer-link" />
      <SocialLink parentClass="footer-icon" itemClass="footer-icons" />
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
