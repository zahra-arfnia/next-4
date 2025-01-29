import Image from "next/image";
import {getData} from "../../utils/actions"
import dynamic from "next/dynamic";

const PostCard = dynamic(() => import("../../components/postsCard"), { loading: () => <p>Loading...</p>,});

export const metadata ={
  title:"Posts",
  description:"this is a user page to show all Posts"
    
} 


export default async function Home() {
    const posts = await getData("https://dummyjson.com/posts")
   
    
  return (
    <div className=" flex flex-col items-center justify-center ">
      <p className="text-center mt-5 text-lg font-semibold mb-8">posts</p> 
             
      <div className="w-3/4 flex  px-3 flex-wrap gap-16 justify-center">
        {posts.posts.map((item ,i)=>(
          <PostCard key={i} body={item.body} reactions={item.reactions} tags={item.tags} title={item.title} views={item.views} id={item.id}/>
             
        ))}
      </div>
    </div>

  );
}