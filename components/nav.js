import Link from 'next/link'
import Loginlogout from "@/components/loginlogout";

export default async function Header() {
    
    return (
        <nav className='w-full h-7 flex justify-around bg-green-300'>
            <Link className='hover:bg-green-400 w-full text-center' href="/">Weather/Map</Link>
            <Link className='hover:bg-green-400 w-full text-center' href="/store">Store</Link>
            <Link className='hover:bg-green-400 w-full text-center' href="/blog">Blog</Link>
            <Link className='hover:bg-green-400 w-full text-center' href="/apid">Apid</Link>
            <Loginlogout/>
        </nav>
        
    )
  }