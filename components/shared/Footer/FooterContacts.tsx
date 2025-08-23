import { contacts } from "@/data/footer";

const FooterContacts = () => (
  <div className="footer__column">
    <h4 className="footer__title footer__title--right">Contact Us</h4>
    <ul className="footer__list">
      {contacts.map((item, index) => (
        <li className="footer__list-item" key={index}>
          <h6 className="footer__item-title">{item.title}</h6>
          <p className="footer__item-value">{item.value}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default FooterContacts