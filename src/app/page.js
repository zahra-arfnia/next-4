import dynamic from "next/dynamic";
import { getData } from "../utils/actions";
import Link from "next/link";

const UserCard = dynamic(() => import("../components/usersCards"),{ loading: () => <p>Loading...</p>,} );
const PostCard = dynamic(() => import("../components/postsCard"), { loading: () => <p>Loading...</p>,});
const RecipesCard = dynamic(() => import("../components/recipesCard"), { loading: () => <p>Loading...</p>,});

export const metadata = {
  title: "All",
  description: "this is a home page to show all products"
};

export default async function Home() {
  const users = await getData("https://dummyjson.com/users");
  const posts = await getData("https://dummyjson.com/posts");
  const recipes = await getData("https://dummyjson.com/recipes");

  const firstFourUsers = users.users.slice(0, 5);
  const firstFourPosts = posts.posts.slice(0, 5);
  const firstFourRecipes = recipes.recipes.slice(0, 5);

  return (
    <div className="flex flex-col items-center justify-center">
      <p className="text-center mt-8 text-lg font-semibold mb-16">Home page</p>

      {/* Users Section */}
      <div className="relative w-11/12 h-3/5 p-7 flex items-center gap-4 containar mb-28">
        {firstFourUsers.map((item, i) => (
          <UserCard
            key={i}
            firstName={item.firstName}
            lastName={item.lastName}
            email={item.email}
            age={item.age}
            image={item.image}
            id={item.id}
          />
        ))}

        <div className="card w-32 h-64 bg-white rounded-md flex flex-col justify-center items-center gap-6 px-4">
          <p className="text-lg font-semibold">show more</p>
          <Link
            className="p-3 jjj btn w-14 h-14 flex items-center justify-center"
            href={"/users"}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>
      </div>

      {/* Posts Section */}
      <div className="relative w-11/12 h-3/5 p-7 rounded-md flex items-center gap-4 containar mb-28">
        {firstFourPosts.map((item, i) => (
          <PostCard
            key={i}
            body={item.body}
            reactions={item.reactions}
            tags={item.tags}
            title={item.title}
            views={item.views}
            id={item.id}
          />
        ))}

        <div className="card w-32 h-64 bg-white rounded-md flex flex-col justify-center items-center gap-6 px-4">
          <p className="text-lg font-semibold">show more</p>
          <Link
            className="p-3 jjj btn w-14 h-14 flex items-center justify-center"
            href={"/posts"}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>
      </div>

      {/* Recipes Section */}
      <div className="relative w-11/12 h-3/5 p-7 rounded-md flex items-center gap-4 containar mb-28">
        {firstFourRecipes.map((item, i) => (
          <RecipesCard
            key={i}
            image={item.image}
            name={item.name}
            ingredients={item.ingredients}
            instructions={item.instructions}
            id={item.id}
          />
        ))}

        <div className="card w-32 h-resipes bg-white rounded-md flex flex-col justify-center items-center gap-6 px-4">
          <p className="text-lg font-semibold">show more</p>
          <Link
            className="p-3 jjj btn w-14 h-14 flex items-center justify-center"
            href={"/recipes"}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
