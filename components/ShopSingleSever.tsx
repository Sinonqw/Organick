// app/shop/[productInner]/page.tsx
import connectDb from "@/lib/dbConnect";
import Product from "@/models/Product";
import ShopSingleClient from "./ShopSingleClient";
import { IProduct } from "@/types/product";

interface IProps {
  params: { productInner: string };
}

const ShopSingleServer = async ({ params }: IProps) => {
  if (!params.productInner) return <div>Product ID not provided</div>;

  await connectDb();

  // Получаем продукт
  const productRaw = await Product.findById(params.productInner).lean() as IProduct | null;
  if (!productRaw) return <div>Product not found</div>;

  const product: IProduct = {
    _id: productRaw._id.toString(),
    tag: productRaw.tag,
    title: productRaw.title,
    img: productRaw.img,
    cost: productRaw.cost,
    description: productRaw.description || "",
  };

  // Получаем другие продукты
  const otherProductsRaw = await Product.find({ _id: { $ne: params.productInner } })
    .limit(4)
    .lean();

  const otherProducts: IProduct[] = otherProductsRaw.map((p) => ({
    _id: (p._id as any).toString(),
    tag: p.tag,
    title: p.title,
    img: p.img,
    cost: p.cost,
    description: p.description || "",
  }));

  return <ShopSingleClient product={product} otherProducts={otherProducts} />;
};

export default ShopSingleServer;
