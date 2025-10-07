import mongoose from "mongoose";

const MONGODB_URI = "mongodb+srv://Sinon:z1a2k3zak@cluster0.uz6kssv.mongodb.net/Organick?retryWrites=true&w=majority&appName=Cluster0"

if (!MONGODB_URI) throw new Error("Нет ссылки на БД");

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectDB() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((m) => m);
  }
  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectDB;
