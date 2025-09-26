import connectDb from "@/lib/dbConnect";
import Product from "@/models/Product";
import Banner from "@/components/shared/Banner";
import ProductGallery from "@/components/sections/Shop/ShopInner/ProductGallery";
import ProductDetails from "@/components/sections/Shop/ShopInner/ProductDetails";
import RelatedProducts from "@/components/sections/Shop/ShopInner/RelatedProducts";

interface IProps {
  params: { productInner: string };
}

const ShopSingle = async ({ params }: IProps) => {
  if (!params.productInner) return <div>Product ID not provided</div>;

  await connectDb();
  const product = await Product.findById(params.productInner);
  if (!product) return <div>Product not found</div>;

  const otherProducts = await Product.find({
    _id: { $ne: params.productInner },
  }).limit(4);

  return (
    <>
      <Banner img="/banners/singleB.png" text="Shop Single" />
      <section className="container mx-auto py-16 px-4">
        <div className="flex flex-col md:flex-row gap-8 lg:gap-16">
          <ProductGallery
            img={product.img}
            title={product.title}
            tag={product.tag}
          />
          <ProductDetails
            title={product.title}
            cost={product.cost}
            description="Simply dummy text of the printing and typesetting industry..."
            product={JSON.parse(JSON.stringify(product))}
          />
        </div>
      </section>
      <RelatedProducts products={otherProducts} />
    </>
  );
};

export default ShopSingle;
