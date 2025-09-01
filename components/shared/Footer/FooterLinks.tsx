import { utilityPages } from "@/data/footer";
import Link from "next/link";

const FooterLinks = () => (
  <div className="flex flex-col items-center md:items-start w-full md:w-auto mt-8 md:mt-0">
    <h4 className="font-bold text-[#274C5B] text-2xl md:text-3xl lg:text-4xl mb-4 md:mb-5 text-center md:text-left">Utility Pages</h4>
    <ul className="flex flex-col gap-2 text-center md:text-left">
      {utilityPages.map((item, index) => (
        <li key={index}>
          <Link href={item.href} className="text-sm md:text-base text-[#525c60] leading-normal font-normal">{item.title}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default FooterLinks;