import { followLinks, infoLinks } from "../../data/footerData";
import "./Footer.css";
import FooterLinkGroup from "./FooterLinkGroup";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer-wrapper">
        <div className="about-group">
          <h2>Ivan</h2>
          <p>Frontend Developer</p>
          <a href="#about">About me</a>
        </div>
        <div className="hr"></div>
        <FooterLinkGroup title="More" links={infoLinks} />
        <div className="hr"></div>
        <FooterLinkGroup title="Follow" links={followLinks} isSocial />
      </div>
      <p className="footer-copyright">
        © <span className="year">{currentYear}</span> by Frontend. All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
