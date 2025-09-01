import { contacts } from "@/data/footer";

const FooterContacts = () => (
  <div className="flex flex-col items-center md:items-end w-full md:w-auto mt-8 md:mt-0">
    <h4 className="font-bold text-[#274C5B] text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-8 text-center md:text-right">Contact Us</h4>
    <ul className="flex flex-col gap-2 md:gap-4 text-center md:text-right">
      {contacts.map((item, index) => (
        <li key={index}>
          <h6 className="text-base md:text-lg font-bold text-[#525C60] leading-tight">{item.title}</h6>
          <p className="text-sm md:text-base text-[#525C60]">{item.value}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default FooterContacts;