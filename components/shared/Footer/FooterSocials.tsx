import Link from "next/link";
import Image from "next/image";
import { socials } from "@/data/footer";

const FooterSocials = () => (
  <div className="flex flex-col items-center  md:border-x border-[#d4d4d4] py-8 md:py-0 md:px-6 lg:px-10 max-w-full md:max-w-[543px]">
    <Link className="mb-4" href={"/"}>
      <Image alt="logo" src={"/Logo.svg"} width={198} height={53} priority />
    </Link>
    <p className="mb-6 md:mb-12 leading-normal text-[#525c60] text-sm md:text-base text-center max-w-[400px]">
      Simply dummy text of the printing and typesetting industry. Lorem Ipsum
      simply dummy text of the printing
    </p>
    <div className="flex gap-2 md:gap-4">
      {socials.map(({ Icon, href }, index) => (
        <Link
          className="p-3 md:p-5 rounded-full bg-[#eff6f1] flex items-center justify-center transition-all duration-300 hover:bg-[#d9ede2]"
          href={href}
          target="_blank"
          key={index}
        >
          <Icon size={16} />
        </Link>
      ))}
    </div>
  </div>
);

export default FooterSocials;
