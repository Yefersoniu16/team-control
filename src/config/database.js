import mongoose from "mongoose";

export async function db() {
  await mongoose.connect(
    "mongodb+srv://root:admin@cluster0.wbaz4yk.mongodb.net/?retryWrites=true&w=majority"
  );
}
