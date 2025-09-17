import Banner from "@/components/sections/Banner";
import Image from "next/image";
import Title from "@/components/ui/Title";
import Desc from "@/components/ui/Desc";

interface IProductPageProps {
  params: {
    productInner: string;
  };
}

const ShopSingle = ({ params }: IProductPageProps) => {
  return (
    <>
      <Banner img="/banners/singleB.jpg" text="Shop Single" />
      <section>
        <article className="bg-[#F9F8F8] p-4 md:p-6 rounded-2xl article-hover-effect">
          <span className="inline-block py-1 px-3 bg-[#274C5B] text-white open-sans font-semibold text-xs rounded-lg text-center">
            {}
          </span>

          <div className="w-full aspect-square flex items-center justify-center my-4">
            <Image
              className="max-h-full object-contain drop-shadow-[0_4px_6px_rgba(0,0,0,0.3)]"
              src={''}
              alt={''}
              width={335}
              height={324}
            />
          </div>

          <h5 className="roboto font-semibold text-lg md:text-xl text-[#274C5B] mb-2">
            {}
          </h5>

          <div className="flex justify-between items-center pt-2 border-t border-[#dedddd]">
            <div className="flex gap-1 items-center">
              <span className="line-through font-semibold text-sm text-[#b8b8b8]">
                $20.00
              </span>
              <span className="font-bold text-[#274c5b] text-base md:text-lg">
                ${}.00
              </span>
            </div>

            <div>
              <Image alt="#" src={"/icons/stars.svg"} width={84} height={18} />
            </div>
          </div>
        </article>
      </section>
    </>
  );
};

export default ShopSingle;
