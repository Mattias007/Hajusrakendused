import Link from 'next/link'
import Loginlogout from "@/components/loginlogout";

export default async function Header() {
    
    return (
        <nav className='w-full h-7 bg-gray-50 flex justify-around'>
            <Link href="/">Weather/Map</Link>
            <Link href="/store">Store</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/apid">Apid</Link>
            <Loginlogout/>
        </nav>
        
    )
  }