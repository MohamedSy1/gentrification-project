import React from "react"
import logo from "../assets/logo.png"

const Navbar = () => {
    return (
        <header className="w-full">
            <div className="flex justify-between items-center bg-[white] w-full mb-8 p-4">
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