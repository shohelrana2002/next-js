import React from "react";

const ProductsPage = async ({}) => {
  const res = await fetch("http://localhost:3000/api/items", {
    cache: "force-cache",
  });
  const data = await res.json();

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
