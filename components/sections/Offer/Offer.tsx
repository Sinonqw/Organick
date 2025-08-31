import React, { useMemo } from "react";
import { Products } from "@/data/Products";
import ProductCard from "../OurProducts/ProductCard";
import HeaderSect from "@/components/ui/HeaderSect";
import styles from "./Offer.module.css";

const Offer = () => {
  function getRandomItems<T>(array: T[], count: number): T[] {
    const newArray = [...array];

    for (let i = newArray.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));

      [newArray[i], newArray[randomIndex]] = [
        newArray[randomIndex],
        newArray[i],
      ];
    }

    return newArray.slice(0, count);
  }
  const randomProducts = useMemo(() => getRandomItems(Products, 4), []);

  return (
    <section className={styles.offerSection}>
      <HeaderSect
        btnText="View All Product"
        btnTextColor="#274C5B"
        subtitleText="Offer"
        titleColor="#FFFFFF"
        titleText="We Offer Organic For You"
      />

      <div>
        <ul className={styles.offerSection__list}>
          {randomProducts.map((product, i) => (
            <ProductCard
              cost={product.cost}
              img={product.img}
              tag={product.tag}
              title={product.title}
              key={i}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Offer;
