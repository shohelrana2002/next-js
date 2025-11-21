import { dbConnect } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(request, { params }) {
  const { id } = await params;
  const query = { _id: new ObjectId(id) };
  const result = await dbConnect("testDataPost").findOne(query);
  return Response.json(result);
}

export async function DELETE(request, { params }) {
  const { id } = await params;
  const query = { _id: new ObjectId(id) };
  const result = await dbConnect("testDataPost").deleteOne(query);
  return Response.json(result);
}
export async function PATCH(request, { params }) {
  const { id } = await params;
  const { name } = await request.json();
  const query = { _id: new ObjectId(id) };
  const updateDoc = {
    $set: {
      name: name,
    },
  };
  const option = {
    upsert: true,
  };
  const result = await dbConnect("testDataPost").updateOne(
    query,
    updateDoc,
    option
  );
  return Response.json(result);
}
