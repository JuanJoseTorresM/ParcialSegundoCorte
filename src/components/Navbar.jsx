import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className="flex justify-center posi">
                <nav className="p-6">
                    <div className="container mx-auto">
                        <div className="flex justify-between items-center">
                            <div className="hidden md:flex items-center space-x-20 text-lg">
                                <NavLink href="#" className="text-white hover:text-gray-300" to="/">Home</NavLink>
                                <NavLink href="#" className="text-white hover:text-gray-300" to="/about">About</NavLink>
                                <NavLink href="#" className="text-white hover:text-gray-300" to="/">Catalogue </NavLink>
                                <NavLink href="#" className="text-white hover:text-gray-300" to="/promo">Promo</NavLink>
                                <NavLink href="#" className="text-white hover:text-gray-300" to="/">Contact</NavLink>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
export default Navbar;