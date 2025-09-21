import connectDb from "@/lib/dbConnect";
import Product from "@/models/Product";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDb();
  const products = await Product.find();
  return NextResponse.json(products);
}

export async function POST(req) {
  await connectDb();
  const body = await req.json();
  const newProduct = await Product.create(body);
  return NextResponse.json(newProduct, { status: 201 });
}
