"use client";
import Image from "next/image";

interface ProductGalleryProps {
  img: string;
  title: string;
  tag: string;
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ img, title, tag }) => {
  return (
    <div className="flex justify-center items-start">
      <div className="relative w-full max-w-sm md:max-w-md aspect-square rounded-2xl overflow-hidden">
        <span className="absolute top-4 left-4 z-10 inline-block py-1 px-3 bg-[#274C5B] text-white text-xs rounded-lg">
          {tag}
        </span>
        <Image
          src={img}
          alt={title}
          fill
          style={{ objectFit: "contain" }}
          className="bg-[#F9F8F8] p-8 md:p-12"
        />
      </div>
    </div>
  );
};

export default ProductGallery;
