import { NavLink } from "react-router";

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start !p-5">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    {/* Mobile dropdown */}
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-amber-50 text-black rounded-box z-1 mt-3 ml-3 w-52 p-2 shadow gap-2 [&_a]:!px-1 [&_a]:!py-2 [&_.active]:text-blue-600 [&_.active]:font-bold">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/explore">Explore Swaps</NavLink></li>
                        <li><NavLink to="/matches">My Matches</NavLink></li>
                        <li><NavLink to="/chat">Chat</NavLink></li>
                        <li><NavLink to="/post">Post a Skill</NavLink></li>
                    </ul>

                </div>
                <a className="btn btn-ghost text-xl">SwapSavvy</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                {/* Desktop navigation links */}
                <ul className="menu menu-horizontal px-1 gap-2 [&_.active]:text-blue-600 [&_.active]:border-b-2 [&_.active]:border-blue-600 [&_.active]:font-semibold">
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/explore">Explore Swaps</NavLink></li>
                    <li><NavLink to="/matches">My Matches</NavLink></li>
                    <li><NavLink to="/chat">Chat</NavLink></li>
                    <li><NavLink to="/post">Post a Skill</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end !mr-5 *:!m-1">
                {/* Desktop search with icon */}
                <div className="relative hidden md:block">
                    <input type="text" className="input pl-10 pr-4" placeholder="Search..." />
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </div>
                {/* Mobile search dropdown */}
                <div className="dropdown dropdown-end md:hidden">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <div tabIndex={0} className="dropdown-content bg-base-100 rounded-box z-1 mt-3 w-64 p-3 shadow">
                        <div className="relative">
                            <input type="text" placeholder="Search..." className="input input-bordered w-full ml-3 pl-10 pr-4" />
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </div>
                    </div>
                </div>


                <NavLink className="btn btn-info !px-3 !py-2">Login</NavLink>
                <p>or</p>

                <NavLink className="btn btn-info !px-3 !py-2">Signup</NavLink>
            </div>
        </div>
    );
};

export default Navbar;