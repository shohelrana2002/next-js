import Link from "next/link";
import MealSearchInput from "./components/MealSearchInput";
import Image from "next/image";
export const metadata = {
  title: "All Meals",
  description: "All Meals Get Now !!",
};

const MealsPage = async ({ searchParams }) => {
  const query = await searchParams;
  const fetchData = async () => {
    try {
      const res = await fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${query.search}`
      );
      const data = await res.json();
      return data?.meals;
    } catch (error) {
      console.log(error);
      setData([]);
    }
  };
  const data = await fetchData();

  return (
    <div className="mt-32">
      <MealSearchInput />
      <div className="grid grid-cols-4 rounded-2xl px-12 py-10 gap-12">
        {data?.map((i, index) => (
          <div className="border border-amber-400 p-4 " key={index}>
            <Image
              width={600}
              height={600}
              src={i.strMealThumb}
              alt={i.strMeal}
            />
            <p>{i?.strMeal}</p>
            <p>{i?.strInstructions.substring(0, 30)}</p>
            <Link href={`/meals/${i?.idMeal}`} className="btn btn-secondary">
              Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default MealsPage;
