import React from "react"
import logo from "../assets/logo.png"
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header className="w-full top-0 text-[black]">
            <div className="flex justify-between items-center bg-[white] w-full p-4">
                <img className="w-[15rem]" src={logo} alt="Rent Increase" />
                <ul className="flex flex-row gap-[2rem]">
                   <li>
                    <Link to="/">Home</Link>
                       {/* <a href="/" className="hover:text-blue-500 hover:underline">Home</a> */}
                   </li>
                   <li>
                        <Link to="/pages" className="hover:text-blue-500 hover:underline">Source</Link>
                   </li>
                </ul>
            </div>
        </header>
    )
 }

export default Navbar;