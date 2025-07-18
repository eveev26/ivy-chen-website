import Link from 'next/link';

export function Navbar() {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const navbarHeight = 120;
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - navbarHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex flex-row w-full min-h-20 p-8 justify-between bg-white">
            <div className="flex flex-row gap-12">
                <Link href="https://github.com/eveev26" className="nav-icon">
                    <svg width="24" height="24" viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z" fill="currentColor"/>
                    </svg>
                </Link>
                <Link href="https://ca.linkedin.com/in/ivy-chen-ic" className="nav-icon">
                    <svg width="28" height="28" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                        <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z" fill="currentColor"/>
                    </svg>
                </Link>
                <Link href="https://devpost.com/chen-ivy-ic" className="nav-icon">
                    <svg width="28" height="28" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.002 1.61 0 12.004 6.002 22.39h11.996L24 12.004 17.998 1.61zm1.593 4.084h3.947c3.605 0 6.276 1.695 6.276 6.31 0 4.436-3.21 6.302-6.456 6.302H7.595zm2.517 2.449v7.714h1.241c2.646 0 3.862-1.55 3.862-3.861.009-2.569-1.096-3.853-3.767-3.853z" fill="currentColor"/>
                    </svg>
                </Link>
            </div>
            
            <div className="flex flex-row gap-12">
                <button 
                    onClick={() => scrollToSection('home')} 
                    className="flex text-dark-brown text-lg nav-link hover:opacity-70 transition-opacity"
                >
                    home
                </button>
                <button 
                    onClick={() => scrollToSection('about-me')} 
                    className="flex text-dark-brown text-lg nav-link hover:opacity-70 transition-opacity"
                >
                    about me
                </button>
                <button 
                    onClick={() => scrollToSection('projects')} 
                    className="flex text-dark-brown text-lg nav-link hover:opacity-70 transition-opacity"
                >
                    projects
                </button>
                <button 
                    onClick={() => scrollToSection('experience')} 
                    className="flex text-dark-brown text-lg nav-link hover:opacity-70 transition-opacity"
                >
                    experience
                </button>
            </div>
        </nav>
    )
}