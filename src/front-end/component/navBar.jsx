import React from "react"
import logo from "../assets/logo.png"

const Navbar = () => {
    return (
        <header className="w-full top-0">
            <div className="flex justify-between items-center bg-[white] w-full p-4">
                <img className="w-[15rem]" src={logo} alt="Rent Increase" />
                <ul className="flex flex-row gap-[2rem]">
                   <li>
                       <a href="#" className="hover:text-blue-500 hover:underline">Home</a>
                   </li>
                   <li>
                       <a href="" className="hover:text-blue-500 hover:underline">About</a>
                   </li>
                   <li>
                       <a href="" className="hover:text-blue-500 hover:underline">Contact</a>
                   </li>
                </ul>
            </div>
        </header>
    )
 }

export default Navbar;