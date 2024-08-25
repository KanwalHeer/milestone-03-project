import Link from "next/link";

export default function Header() {
  return (
    <main >
   
     <div className="m-2  flex flex-row justify-evenly bg-gray-950 text-white p-4 rounded-full">
     <Link href={'/'}>Main</Link>
   <Link href={'/home'}>home </Link>
   <Link href={'/about'}>About</Link>
   <Link href={'/service'}>Service</Link>
   <Link href={'/contact'}>Contact</Link>
   </div>
  
    </main>
  );
}
