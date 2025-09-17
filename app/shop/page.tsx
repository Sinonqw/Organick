import React from "react";
import Banner from "@/components/sections/Banner";
import Newsletter from "@/components/sections/newsletter/Newsletter";
import ProductsList from "@/components/sections/ProductsList";
import { Products } from "@/data/Products";

const page = () => {
  return (
    <>
      <Banner img="/banners/shopB.jpg" text="Shop" />
      <section className="py-23">
        <ProductsList count={12} products={Products}/>
      </section>
      <Newsletter />
    </>
  );
};

export default page;
