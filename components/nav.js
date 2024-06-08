import Link from 'next/link'
import Loginlogout from "@/components/loginlogout";

export default async function Header() {
    
    return (
        <nav className='w-full h-14 text-center items-center flex-grow flex justify-around bg-green-300'>
            <Link className='hover:bg-green-400 w-full h-full content-center' href="/">Weather/Map</Link>
            <Link className='hover:bg-green-400 w-full h-full content-center' href="/store">Store</Link>
            <Link className='hover:bg-green-400 w-full h-full content-center' href="/blog">Blog</Link>
            <Link className='hover:bg-green-400 w-full h-full content-center' href="/apid">Apid</Link>
            <Loginlogout/>
        </nav>
        
    )
  }