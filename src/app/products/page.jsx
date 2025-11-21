import { dbConnect } from "@/lib/dbConnect";
import { redirect } from "next/navigation";
import React from "react";
import getProducts from "../actions/products/getProducts";
// export const dynamic = "force-dynamic";
const ProductsPage = async ({}) => {
  // const res = await fetch("https://nextjs-cooking-theta.vercel.app/api/items");
  // const data = await res.json();
  const data = await getProducts();

  // {
  //   cache: "force-cache",
  // }
  // data 3post er jon p redirect
  // if (data.length > 3) {
  //   redirect("/");
  // }
  return (
    <div className="mt-3 grid grid-cols-4 gap-3">
      {data.map((i) => (
        <div className=" p-4 rounded-2xl  border-2 bg-orange-500" key={i._id}>
          <p>{i.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductsPage;
