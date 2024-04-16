import Link from 'next/link'
export default async function Header() {
    return (
        <nav className='w-screen h-7 bg-gray-50 flex justify-around'>
            <Link href="/">Weather/Map</Link>
            <Link href="/store">Store Cart</Link>
        </nav>
    )
  }