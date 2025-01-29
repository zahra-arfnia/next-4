import { getData } from "@/utils/actions";
import { notFound } from "next/navigation";
import Image from "next/image";


export async function generateMetadata({ params }) {
  const post = await getData(`https://dummyjson.com/users/${params.id}`);

  if (!post) {
    return {
      title: " Not Found",
      description: "This users does not exist.",
    };
  }

  return {
    title: "users : " + post.id,
    description:"The id of this users is equal to"+ post.id,
  };
}




async function page({ params }) {
  const id = params.id;


  if (isNaN(id) || parseInt(id) <= 0) {
    notFound(); 
  }


  const usersData = await getData("https://dummyjson.com/users");
  console.log(usersData);
  
  const totalUsers = usersData.total;


  if (parseInt(id) > totalUsers) {
    notFound(); 
  }


  const user = await getData(`https://dummyjson.com/users/${id}`);

  if (!user) {
    notFound(); 
  }

  const {
    firstName,
    lastName,
    age,
    gender,
    email,
    phone,
    username,
    birthDate,
    image,
    address,
    company,
    role,
  } = user;

  return (
    <div className="flex justify-center py-10">
      <div className="max-w-lg w-full bg-white p-6 rounded-lg shadow-lg">
        <div className="flex justify-center mb-4">
       
          <Image src={image} alt="User Image" width={128} height={128} className="rounded-full"/>
        </div>

        <div className="text-center">
          <h1 className="text-3xl font-bold">
            {firstName} {lastName}
          </h1>
          <p className="text-gray-500">Age: {age}</p>
          <p className="text-gray-500">Gender: {gender}</p>
        </div>

        <div className="mt-4">
          <h2 className="text-xl font-semibold">Contact Info</h2>
          <p className="text-gray-700">Email: {email}</p>
          <p className="text-gray-700">Phone: {phone}</p>
          <p className="text-gray-700">Username: {username}</p>
          <p className="text-gray-700">Birth Date: {birthDate}</p>
        </div>

        <div className="mt-4">
          <h2 className="text-xl font-semibold">Address</h2>
          <p className="text-gray-700">Address: {address.address}</p>
          <p className="text-gray-700">City: {address.city}</p>
          <p className="text-gray-700">State: {address.state}</p>
          <p className="text-gray-700">Postal Code: {address.postalCode}</p>
          <p className="text-gray-700">Country: {address.country}</p>
        </div>

        <div className="mt-4">
          <h2 className="text-xl font-semibold">Company</h2>
          <p className="text-gray-700">Company Name: {company.name}</p>
          <p className="text-gray-700">Department: {company.department}</p>
          <p className="text-gray-700">Role: {company.title}</p>
        </div>

        <div className="mt-4">
          <h2 className="text-xl font-semibold">Role</h2>
          <p className="text-gray-700">Role: {role}</p>
        </div>
      </div>
    </div>
  );
}

export default page;
