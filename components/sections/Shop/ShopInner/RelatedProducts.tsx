"use client";
import ProductsList from "../../products/ProductsList";

interface RelatedProductsProps {
  products: any[];
  count?: number;
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({ products, count = 4 }) => {
  return (
    <section className="container mx-auto py-16 px-4">
      <h2 className="text-2xl font-bold text-[#275b27] mb-6">Related Products</h2>
      <ProductsList count={count} products={products} />
    </section>
  );
};

export default RelatedProducts;
