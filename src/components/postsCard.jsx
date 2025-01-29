import Link from "next/link";
export default function PostCard({ body, reactions, tags, title, views ,id}) {


    return (
        <div className=" rounded-md h-64 cardd flex flex-col  px-4 bg-white">
            <p className="text-sm font-bold ggg my-4 h-9 ">{title}</p>
            <p className="text-xs font-semibold  aaa ">{body}</p>
          

            <div className="flex my-6 items-center justify-between">
                <p className="text-xs font-semibold ">views : {views}</p>
                
          <p className="text-xs font-semibold">Likes: {reactions.likes}</p>
         
      
            </div>
            <Link href={`/posts/${id}`} className="py-4 w-full h-6 btn rounded-md text-base font-medium text-neutral-800 flex justify-center items-center">more information</Link>
           
        </div>
    );
}