import connectDb from "@/lib/dbConnect";
import New from "@/models/New";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDb();
    const news = await New.find();
    return NextResponse.json(news); // вот здесь
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { error: "Не удалось получить новости" },
      { status: 500 }
    );
  }
}
