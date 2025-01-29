import Image from "next/image";
import {getData} from "../../utils/actions"
import dynamic from "next/dynamic";
const UserCard = dynamic(() => import("../../components/usersCards"),{ loading: () => <p>Loading...</p>,} );
  
export const metadata ={
  title:"Users",
  description:"this is a user page to show all users"
    
} 


export default async function Home() {
    const users = await getData("https://dummyjson.com/users")

    
  return (
    <div className=" flex flex-col items-center justify-center">
      <p className="text-center mt-5 text-lg font-semibold mb-8"> users </p> 
             
      <div className=" w-2/3 flex px-3 flex-wrap gap-12 justify-center">
        {users.users.map((item,i)=>(
          <UserCard key={i} firstName={item.firstName} lastName={item.lastName} email={item.email} age={item.age} image={item.image} id={item.id}/>
             
        ))}
      </div>
    </div>

  );
}
