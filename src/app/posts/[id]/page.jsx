import { getData } from "@/utils/actions";
import { notFound } from "next/navigation";


export async function generateMetadata({ params }) {
  const post = await getData(`https://dummyjson.com/posts/${params.id}`);

  if (!post) {
    return {
      title: " Not Found",
      description: "This post does not exist.",
    };
  }

  return {
    title: "post : " + post.id,
    description:"The id of this post is equal to"+ post.id,
  };
}


async function page({ params }) {
  const id = params.id;


  if (isNaN(id) || parseInt(id) <= 0) {
    notFound(); 
  }


  const postsData = await getData("https://dummyjson.com/posts");
  const totalPosts = postsData.total;


  if (parseInt(id) > totalPosts) {
    notFound(); 
  }


  const post = await getData(`https://dummyjson.com/posts/${id}`);

 
  if (!post) {
    notFound();
  }

  return (
    <div className="flex justify-center items-center p-6">
      <div className="w-full max-w-lg p-5 bg-white rounded-lg shadow-lg">
      
        <h1 className="text-2xl font-semibold mb-4">{post.title}</h1>

   
        <p className="text-sm text-gray-700 mb-4">{post.body}</p>

      
        <div className="flex items-center gap-4 mb-4">
          <p className="text-sm">Likes: {post.reactions.likes}</p>
          <p className="text-sm">Dislikes: {post.reactions.dislikes}</p>
        </div>

      
        <div className="mb-4">
          <p className="text-sm">Views: {post.views}</p>
        </div>

      
        <div className="flex gap-2 mb-4">
          {post.tags.map((tag, index) => (
            <span
              key={index}
              className="bg-gray-200 text-sm text-gray-800 px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default page;
