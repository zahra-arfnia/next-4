import { getData } from "@/utils/actions";
import { notFound } from "next/navigation";
import Image from "next/image";

export async function generateMetadata({ params }) {
  const post = await getData(`https://dummyjson.com/recipes/${params.id}`);

  if (!post) {
    return {
      title: " Not Found",
      description: "This recipes does not exist.",
    };
  }

  return {
    title: "recipes : " + post.id,
    description:"The id of this recipes is equal to"+ post.id,
  };
}



async function page({ params }) {
  const id = params.id;

  
  if (isNaN(id) || parseInt(id) <= 0) {
    notFound(); 
  }

  const recipesData = await getData("https://dummyjson.com/recipes");
  const totalRecipes = recipesData.total;

  if (parseInt(id) > totalRecipes) {
    notFound(); 
  }


  const recipe = await getData(`https://dummyjson.com/recipes/${id}`);

  if (!recipe) {
    notFound();
  }

  return (
    <div className="flex justify-center items-center p-6">
      <div className="w-96 bg-white rounded-lg shadow-md p-4">

      <Image
  src={recipe.image}
  alt={recipe.name}
  width={500} 
  height={224} 
  className="w-full h-56 object-cover rounded-md"
  layout="intrinsic"
/>
        <h2 className="text-xl font-semibold mt-4">{recipe.name}</h2>


        <div className="mt-2">
          <span className="font-semibold">Cuisine:</span> {recipe.cuisine}
        </div>
        <div className="mt-2">
          <span className="font-semibold">Difficulty:</span> {recipe.difficulty}
        </div>
        <div className="mt-2">
          <span className="font-semibold">Prep Time:</span>{" "}
          {recipe.prepTimeMinutes} mins
        </div>
        <div className="mt-2">
          <span className="font-semibold">Cook Time:</span>{" "}
          {recipe.cookTimeMinutes} mins
        </div>
        <div className="mt-2">
          <span className="font-semibold">Servings:</span> {recipe.servings}
        </div>
        <div className="mt-2">
          <span className="font-semibold">Calories per Serving:</span>{" "}
          {recipe.caloriesPerServing} kcal
        </div>


        <div className="mt-4">
          <h3 className="font-semibold">Ingredients:</h3>
          <ul className="list-disc pl-5">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="text-sm">
                {ingredient}
              </li>
            ))}
          </ul>
        </div>


        <div className="mt-4">
          <h3 className="font-semibold">Instructions:</h3>
          <ol className="list-decimal pl-5">
            {recipe.instructions.map((instruction, index) => (
              <li key={index} className="text-sm">
                {instruction}
              </li>
            ))}
          </ol>
        </div>

      
        <div className="mt-4">
          <span className="font-semibold">Rating:</span> {recipe.rating} / 5
        </div>
        <div className="mt-2">
          <span className="font-semibold">Reviews:</span> {recipe.reviewCount}
        </div>
      </div>
    </div>
  );
}

export default page;
