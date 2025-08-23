import { utilityPages } from "@/data/footer";
import Link from "next/link";

const FooterLinks = () => (
  <div className="footer__column">
    <h4 className="footer__utility-title">Utility Pages</h4>
    <ul className="footer__utility-list">
      {utilityPages.map((item, index) => (
        <li className="footer__utility-item" key={index}>
          <Link href={item.href}>{item.title}</Link>
        </li>
      ))}
    </ul>
  </div>
);
export default FooterLinks;