"use client";
import AddToCartButton from "@/components/sections/cart/AddToCartButton";

interface ProductDetailsProps {
  title: string;
  cost: number;
  description: string;
  rating?: number;
  product: any;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  title,
  cost,
  description,
  rating = 5,
  product,
}) => {
  return (
    <div className="flex-1">
      <h1 className="text-3xl lg:text-4xl font-bold text-[#274C5B]">{title}</h1>
      <div className="flex items-center my-2">
        <div className="flex text-[#FFD700]">{'⭐'.repeat(rating)}</div>
        <span className="text-[#686868] ml-2">({rating} customer review)</span>
      </div>
      <div className="text-2xl font-bold text-[#274C5B] my-4">${cost}</div>
      <p className="text-[#686868] leading-relaxed mb-6">{description}</p>
      <div className="flex items-center gap-4">
        <AddToCartButton product={product} />
      </div>
    </div>
  );
};

export default ProductDetails;
