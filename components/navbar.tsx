import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex flex-row w-full min-h-20 p-8 justify-between bg-white">
            <div className="flex flex-row gap-12">
                <Link href="https://github.com/eveev26" className="flex items-center">
                    <Image 
                        src="/icons/github-logo.svg" 
                        alt="GitHub" 
                        width={24} 
                        height={24}
                    />
                </Link>
                <Link href="https://ca.linkedin.com/in/ivy-chen-ic" className="flex items-center">
                    <Image 
                        src="/icons/linkedin-logo.svg" 
                        alt="LinkedIn" 
                        width={28} 
                        height={28}
                    />
                </Link>
                <Link href="https://devpost.com/chen-ivy-ic" className="flex items-center">
                    <Image 
                        src="/icons/devpost-logo.svg" 
                        alt="Devpost" 
                        width={28} 
                        height={28}
                    />
                </Link>
            </div>
            
            <div className="flex flex-row gap-12">
                <Link href="/"><button className="flex text-dark-brown text-lg">home</button></Link>
                <Link href="/about-me"><button className="flex text-dark-brown text-lg">about me</button></Link>
                <Link href="/projects"><button className="flex text-dark-brown text-lg">projects</button></Link>
                <Link href="/experience"><button className="flex text-dark-brown text-lg">experience</button></Link>
            </div>
        </nav>
    )
}