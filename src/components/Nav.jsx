import React from 'react'
import { SiScrutinizerci, SiGithub } from "react-icons/si"

const Nav = () => {
    return (
        <div className="sticky top-2 w-[90%] max-w-3xl h-16 z-50 mb-16">
            <div className='relative mx-auto mt-8 w-full h-full group'>

                <div className="absolute top-0 left-0 -inset-0.5 rounded-full bg-gradient-to-r from-pink-800 to-purple-600 w-full h-full blur group-hover:opacity-90 opacity-75 transition duration-1000 group-hover:duration-200"></div>

                <div className="neo relative flex items-center justify-between px-4 h-full w-full rounded-full text-4xl lg:text-5xl group-hover:duration-200 transition">
                    <a href="https://0xsahil.netlify.app/"><SiScrutinizerci /> </a>
                    <a href="https://github.com/0xsahil" target='_blank' rel="noreferrer"><SiGithub /> </a>
                </div>

            </div>
        </div>
    )
}

export default Nav