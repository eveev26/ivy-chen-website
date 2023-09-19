import Link from 'next/link';

export default function Navbar() {
    return (
        <main className="flex flex-row place-items-center min-w-screen min-h-20 p-8 gap-4">
            <Link href="/"><button className="flex text-white text-lg">Home</button></Link>
            <Link href="/about-me"><button className="flex text-white text-lg">About Me</button></Link>
            <Link href="/projects"><button className="flex text-white text-lg">Projects</button></Link>
            <Link href="/experience"><button className="flex text-white text-lg">Experience</button></Link>
            <Link href="/designs"><button className="flex text-white text-lg">Designs</button></Link>
        </main>
    )
}