import React from "react";
import ProductCard from "./ourProducts/ProductCard";

export interface IProduct {
  _id: string;
  tag: string;
  title: string;
  img: string;
  cost: number;
}

const ProductsList = ({ products, count }: { products: IProduct[]; count: number }) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
      {products.slice(0, count).map((product) => (
        <ProductCard
          key={product._id}
          _id={product._id.toString()}
          tag={product.tag}
          title={product.title}
          img={product.img}
          cost={product.cost}
        />
      ))}
    </ul>
  );
};

export default ProductsList;
