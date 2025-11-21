"use client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const MealSearchInput = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const pathName = usePathname();
  useEffect(() => {
    const searchQuery = { search };
    const urlQueryPrams = new URLSearchParams(searchQuery);
    const url = `${pathName}?${urlQueryPrams}`;
    router.push(url);
  }, [search]);
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Search meals..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className=" input input-info w-full max-w-md"
      />
    </div>
  );
};

export default MealSearchInput;
