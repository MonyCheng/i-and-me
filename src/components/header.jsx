import { Menu } from 'lucide-react';

const header = () => {
    // Toggle the mobile menu
    const toggleMobileMenu = () => {
        const mobileMenu = document.getElementById('mobileMenu')
        if (mobileMenu.classList.contains('hidden')) {
            mobileMenu.classList.remove('hidden')
        } else {
            mobileMenu.classList.add('hidden')
        }
    };

    return (
        <header className="flex justify-between items-center py-4 px-4 lg:px-20">
            {/* <h1 className="text-3xl text-red-500 md:text-3xl lg:text-5xl font-light m-0">
                MonyCheng
            </h1> */}

            <nav className="hidden md:flex items-center gap-12">
                <a className="text-base tracking-wide transition-colors hover:text-gray-300 z-50" href="#">
                    Me
                </a>
                <a className="text-base tracking-wide transition-colors hover:text-gray-300 z-50" href="#">
                    My Feature
                </a>
                <a className="text-base tracking-wide transition-colors hover:text-gray-300 z-50" href="#">
                    Resources
                </a>
                <a className="text-base tracking-wide transition-colors hover:text-gray-300 z-50" href="#">
                    Contact
                </a>
            </nav>

            <button className="hidden md:block bg-[#a7a7a7] text-black py-3 px-6 rounded-full duration-500 hover:bg-white cursor-pointer z-50">
                Check out My Portfolio
            </button>

            {/* Mobile Menu */}
            <button onClick={toggleMobileMenu} className="md:hidden text-3xl ps-2 z-50">
                <Menu size={24} />
            </button>

            <div id='mobileMenu' className='hidden fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black bg-opacity-70 backdrop-blur- md'>
                <nav className="flex flex-col gap-6 items-center">
                    <a className="text-base tracking-wide transition-colors hover:text-gray-300 z-50" href="#">
                        Company
                    </a>
                    <a className="text-base tracking-wide transition-colors hover:text-gray-300 z-50" href="#">
                        Feature
                    </a>
                    <a className="text-base tracking-wide transition-colors hover:text-gray-300 z-50" href="#">
                        Resources
                    </a>
                    <a className="text-base tracking-wide transition-colors hover:text-gray-300 z-50" href="#">
                        Docs
                    </a>
                </nav>
            </div>
        </header>
    )
}

export default header