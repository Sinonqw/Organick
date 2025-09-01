// Newsletter.js
import React from "react";
import Title from "@/components/ui/Title";

const Newsletter = () => {
  return (
   <section className="py-12 md:py-16 lg:py-24 px-4">
     <div className="py-12 px-6 md:py-20 md:px-16 lg:py-28 lg:px-24 flex flex-col items-center justify-center text-center md:flex-row md:justify-between md:text-left bg-[url('/newsletterBg.png')] bg-no-repeat bg-cover bg-center rounded-3xl">
       <Title color="white" className="text-3xl md:text-4xl lg:text-5xl max-w-full md:max-w-[357px] mb-6 md:mb-0">
         Subscribe to our Newsletter
       </Title>
       <form className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
         <input
           type="email"
           placeholder="Your Email Address"
           required
           className="py-4 px-6 md:py-6 md:px-8 bg-white rounded-xl w-full md:w-[350px] placeholder:text-gray-500"
         />
         <button className="font-bold roboto text-white text-base md:text-lg lg:text-xl text-center bg-[#274C5B] py-4 md:py-6 px-8 md:px-12 rounded-xl">
           Subscribe
         </button>
       </form>
     </div>
   </section>
  );
};

export default Newsletter;