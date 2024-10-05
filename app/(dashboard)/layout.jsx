import React from 'react'
import { UserButton, UserProfile } from '@clerk/nextjs'
import { MdWbSunny } from "react-icons/md";

const layout = async ({ children }) => {
    return (
        <div>
            <div className="navbar bg-black border-b">

                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-8 w-8"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h7" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Homepage</a></li>
                            <li><a>Portfolio</a></li>
                            <li><a>About</a></li>
                        </ul>
                    </div>
                </div>

                <div className="navbar-center flex flex-row items-center md:gap-52 lg:48 sm:gap-10 gap-16">
                    <h1 className="text-3xl font-bold font-mono">SmartAudit</h1>
                    
                </div>

                <div className="navbar-end">
                <div className='flex flex-row items-center gap-4 m-4'>
                        <UserButton></UserButton>
                    </div>
                </div>
            </div>
            {children}
        </div>
    )
}

export default layout
