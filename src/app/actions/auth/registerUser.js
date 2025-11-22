"use server";
import { dbConnect } from "@/lib/dbConnect";
export const registerUser = async (payload) => {
  // validation here to check
  try {
    const result = await dbConnect("users").insertOne(payload);
    return result;
  } catch (error) {
    console.log("user data post error", error);
    return null;
  }
};
