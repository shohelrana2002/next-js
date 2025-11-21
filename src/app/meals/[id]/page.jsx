import Image from "next/image";
import React from "react";
import { Lancelot } from "next/font/google";
const lancelot = Lancelot({
  weight: ["400"],
  subsets: ["latin"],
});
export const SingleMealsGet = async (id) => {
  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const data = await res.json();
    return data?.meals || [];
  } catch (error) {
    console.log("Modal fetch error", error);
    return [];
  }
};
export async function generateMetadata({ params }) {
  const id = (await params).id;
  const post = await SingleMealsGet(id);
  const meal = post[0];
  return {
    title: meal.strMeal,
    description: meal.strInstructions,
  };
}
const truncateWords = (text, limit = 230) => {
  if (!text) return "";
  const words = text.split(" ");
  return words.length > limit ? words.slice(0, limit).join(" ") + "..." : text;
};

const SingleMeals = async ({ params }) => {
  const { id } = await params;
  const post = await SingleMealsGet(id);

  if (post.length === 0) {
    return <p>No Data Found</p>;
  }

  const meal = post[0];

  // Collect ingredients dynamically
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ing = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];

    if (ing && ing.trim() !== "") {
      ingredients.push(`${ing} - ${measure}`);
    }
  }

  return (
    <div
      className={`flex font-black justify-between ${lancelot.className} gap-2 mx-auto mt-20 px-4`}
    >
      <div className="flex-1">
        {/* Meal Title */}
        <h1 className="text-3xl font-bold mb-4">{meal?.strMeal}</h1>

        {/* Image */}
        <Image
          width={400}
          height={400}
          src={meal?.strMealThumb}
          alt={meal?.strMeal}
          className="w-full object-cover  rounded-lg shadow-md mb-6"
        />
      </div>
      <div className="flex-1">
        {/* Category & Area */}
        <p className="text-gray-600">
          <strong>Category:</strong> {meal?.strCategory} |{" "}
          <strong>Area:</strong> {meal?.strArea}
        </p>

        {/* Ingredients */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">Ingredients</h2>
        <ul className="list-disc ml-6 text-gray-700">
          {ingredients?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        {/* Instructions (230 words limit) */}
        <h2 className="text-2xl font-semibold mt-8 mb-3">Instructions</h2>
        <p className="text-gray-800 leading-7">
          {truncateWords(meal?.strInstructions, 230)}
        </p>
      </div>
    </div>
  );
};

export default SingleMeals;
