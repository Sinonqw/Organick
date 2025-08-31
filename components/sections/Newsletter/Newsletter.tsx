import React from "react";
import Title from "@/components/ui/Title";

const Newsletter = () => {
  return (
   <section className="pb-[140px]">
     <div className="py-[105px] px-[71px] flex justify-between  bg-[url('/newsletterBg.png')] items-center bg-no-repeat bg-cover bg-center  rounded-3xl">
       <Title color="white" size={50} className="max-w-[357px]">
         Subscribe to our Newsletter
       </Title>
       <form className="flex gap-2">
         <input
           type="email"
           placeholder="Your Email Address"
           required
           className="py-7 px-6 bg-white rounded-2xl"
         />
         <button className="font-bold roboto text-white text-[20px] text-center bg-[#274C5B] py-7 px-16 rounded-2xl">
           Subscribe
         </button>
       </form>
     </div>
   </section>
  );
};

export default Newsletter;
