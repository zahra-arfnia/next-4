"use client";
import Link from 'next/link';
import { usePathname } from "next/navigation";
export default function Header() {
  const links = [
    { name: "Home", path: "/" },
    { name: "users", path: "/users" },
    { name: "posts", path: "/posts" },
    { name: "recipes", path: "/recipes" },
 
    
  ];
  const path = usePathname()
  console.log(path);
  
  return (
    <header  style={styles.header} className='rounded-b-xl bg-stone-900'>
      <nav className='flex justify-around  '>
        {links.map((item)=>(
          <Link key={item.name} href={item.path} className={path === item.path ?"active-link": ""}>{item.name}</Link>
        ))}
      </nav>
    </header>
  );

}
const styles = {
    header: {
      backgroundColor: 'black',
      padding: '10px 20px',
      color: '#fff',
      
  }}