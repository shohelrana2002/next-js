"use server";
import { dbConnect } from "@/lib/dbConnect";
import React from "react";
const getProducts = async () => {
  try {
    const data = await dbConnect("testDataPost").find({}).toArray();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default getProducts;
