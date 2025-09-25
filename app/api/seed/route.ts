// import connectDb from "@/lib/dbConnect";
// import New from "@/models/New";
// // import NEWS_ITEMS from "@/data/News";
// import { NextResponse } from "next/server";

// export async function GET() {
//   await connectDb();

//   // очистим коллекцию, чтобы не дублировать
//   await New.deleteMany({});

//   // добавим все товары
// //   const inserted = await New.insertMany(NEWS_ITEMS);

//   return NextResponse.json(inserted, { status: 201 });
// }
