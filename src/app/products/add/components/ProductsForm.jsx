"use client";
import { useRouter } from "next/navigation";

const ProductsForm = () => {
  const navigate = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.title.value;
    const formData = { name };
    const res = await fetch(" http://localhost:3000/api/items", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "content-type": "application/json",
      },
    });

    const data = await res.json();
    if (data?.insertedId) {
      alert("Data Add successfully");
      navigate.push("/products");
      // navigate.refresh();
      form.reset();
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="">Enter Your Product Name</label>
          <input
            required
            placeholder="Product Name...."
            className="input input-primary mb-4"
            type="text"
            name="title"
          />
        </div>
        <div className="mx-auto">
          <button className="btn btn-secondary" type="submit">
            submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductsForm;
