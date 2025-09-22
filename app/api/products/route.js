import connectDb from "@/lib/dbConnect";
import Product from "@/models/Product";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDb();
    const products = await Product.find();
    return NextResponse.json(products);
  } catch (err) {
    console.error("Ошибка GET /api/products:", err);
    return NextResponse.json({ error: "Не удалось получить продукты" }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await connectDb();
    const body = await req.json();
    const newProduct = await Product.create(body);
    return NextResponse.json(newProduct, { status: 201 });
  } catch (err) {
    console.error("Ошибка POST /api/products:", err);
    return NextResponse.json({ error: "Не удалось создать продукт" }, { status: 500 });
  }
}
