import { dbConnect } from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";

export async function GET() {
  const data = await dbConnect("testDataPost").find().toArray();
  return Response.json(data);
}

export async function POST(req) {
  const postData = await req.json();
  const result = await dbConnect("testDataPost").insertOne(postData);
  // case er jon o call dit e hoy revalidatePath post kor bo
  revalidatePath("/products");
  return Response.json(result);
}
