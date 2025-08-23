import Link from "next/link";
import Image from "next/image";
import { socials } from "@/data/footer";

const FooterSocials = () => (
  <div className="footer__center">
    <Link className="footer__logo" href={"/"}>
      <Image alt="logo" src={"/Logo.svg"} width={198} height={53} priority />
    </Link>
    <p className="footer__desc">
      Simply dummy text of the printing and typesetting industry. Lorem Ipsum
      simply dummy text of the printing
    </p>
    <div className="footer__socials">
      {socials.map(({ Icon, href }, index) => (
        <Link
          className="footer__social-link"
          href={href}
          target="_blank"
          key={index}
        >
          <Icon size={20} />
        </Link>
      ))}
    </div>
  </div>
);

export default FooterSocials