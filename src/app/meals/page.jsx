import Link from "next/link";
import MealSearchInput from "./components/MealSearchInput";
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

  if (data?.length > 0) {
    return (
      <div className="mt-32">
        <MealSearchInput />
        <div className=" border-2 grid grid-cols-5 border-r-amber-500 px-12 py-10 gap-12">
          {data?.map((i, index) => (
            <div className="mt-12 " key={index}>
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
  } else {
    return (
      <>
        <div>
          <MealSearchInput />
        </div>
        <h3>No data Found</h3>
      </>
    );
  }
};

export default MealsPage;
