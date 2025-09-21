import connectDb from "@/lib/dbConnect";
import Product from "@/models/Product";
import Banner from "@/components/sections/Banner";
import Image from "next/image";
import Newsletter from "@/components/sections/newsletter/Newsletter";
import ProductsList from "@/components/sections/ProductsList";

interface IProps {
  params: { productInner: string };
}

const ShopSingle = async ({ params }: IProps) => {
  if (!params.productInner) return <div>Product ID not provided</div>;

  // Подключаемся к БД
  await connectDb();

  // Получаем товар по id
  const product = await Product.findById(params.productInner);

  if (!product) return <div>Product not found</div>;

  // Получаем другие продукты для блока "Похожие товары"
  const otherProducts = await Product.find({
    _id: { $ne: params.productInner },
  }).limit(4);

  return (
    <>
      <Banner img="/banners/singleB.png" text="Shop Single" />
      <section className="container mx-auto py-16 px-4">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
          {/* Product Image Section */}
          <div className="flex-1 flex justify-center items-start">
            <div className="relative w-full max-w-sm md:max-w-md aspect-square rounded-2xl overflow-hidden">
              <span className="absolute top-4 left-4 z-10 inline-block py-1 px-3 bg-[#274C5B] text-white text-xs rounded-lg">
                {product.tag}
              </span>
              <Image
                src={product.img}
                alt={product.title}
                layout="fill"
                objectFit="contain"
                className="bg-[#F9F8F8] p-8 md:p-12"
              />
            </div>
          </div>

          {/* Product Details Section */}
          <div className="flex-1">
            <h1 className="text-3xl lg:text-4xl font-bold text-[#274C5B]">
              {product.title}
            </h1>
            <div className="flex items-center my-2">
              <div className="flex text-[#FFD700]">⭐⭐⭐⭐⭐</div>
              <span className="text-[#686868] ml-2">(5 customer review)</span>
            </div>
            <div className="text-2xl font-bold text-[#274C5B] my-4">
              ${product.cost}
            </div>
            <p className="text-[#686868] leading-relaxed mb-6">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to be the industry's standard dummy text ever since the
              1500s, when an unknown printer took a galley.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-lg font-semibold text-[#274C5B]">
                Quantity :
              </span>
              <div className="flex items-center border border-[#969696] rounded-lg">
                <input
                  type="number"
                  defaultValue={1}
                  className="w-20 text-center py-2 px-3 focus:outline-none"
                />
              </div>
              <button className="bg-[#274C5B] text-white font-bold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors">
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Похожие товары */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-2xl font-bold text-[#274C5B] mb-6">
          Related Products
        </h2>
        <ProductsList count={4} products={otherProducts} />
      </section>
      <Newsletter />
    </>
  );
};

export default ShopSingle;
