import React from "react";
import FooterContacts from "./FooterContacts";
import FooterSocials from "./FooterSocials";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <FooterContacts />
        <FooterSocials />
        <FooterLinks />
      </div>
      <div className="footer__bottom">
        Copyright © <span>Organick</span>
      </div>
    </footer>
  );
};

export default Footer;
