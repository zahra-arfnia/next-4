
import "../styles/globals.css";
import dynamic from 'next/dynamic';


const Header = dynamic(()=>import("../components/Header"),{
  loading:()=><p>Loading ...</p>,
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>My App</title>
        <meta name="description" content="This is my app description." />
      </head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
