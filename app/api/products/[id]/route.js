import connectDB from "@/app/lib/dbConnect";
import Product from "../../../models/Product";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  await connectDB();

  const product = await Product.findById(params.id);
  if (!product) {
    return NextResponse.json({ error: "Not Found" }, { status: 404 });
  }

  return NextResponse.json(product);
}
