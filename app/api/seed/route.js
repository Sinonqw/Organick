import connectDB from "@/app/lib/dbConnect";
import Product from "../../models/Product";
import {Products} from "@/data/Products"
import { NextResponse } from "next/server";

export async function GET() {
    await connectDB()

    await Product.deleteMany({})

    const inserted = await Product.insertMany(Products)

    return NextResponse.json(inserted, {status: 201})
}