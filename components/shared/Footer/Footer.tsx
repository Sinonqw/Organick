import React from "react";
import FooterContacts from "./FooterContacts";
import FooterSocials from "./FooterSocials";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  return (
    <footer>
      <div className="flex flex-col md:flex-row justify-center md:gap-10 lg:gap-20 mb-8 md:mb-[102px] px-4">
        <FooterContacts />
        <FooterSocials />
        <FooterLinks />
      </div>
      <div className="text-center text-[#525c60] leading-normal text-sm md:text-base lg:text-lg border-t py-4 border-[#d4d4d4] px-4">
        Copyright © <span className="font-bold">Organick</span>
      </div>
    </footer>
  );
};

export default Footer;