import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Insides() {
    return (
        <>
            <section className='flex'>
                <aside className='w-[230px] bg-orange-400 h-screen'>
                    <ul className='w-full text-white font-semibold text-left px-4 p-3 flex flex-col gap-2'>
                        <li className='hover:bg-orange-700 hover:scale-[1.1] transition ease-in-out duration-300 p-2 rounded-lg cursor-pointer'>
                            <Link to={"/insides"}>
                                Case Study
                            </Link>
                        </li>
                        <li className='hover:bg-orange-700 hover:scale-[1.1] transition ease-in-out duration-300 p-2 rounded-lg cursor-pointer'>
                            <Link to={"/insides/blog"}>
                                Blogs
                            </Link>
                        </li>
                    </ul>
                </aside>
                <Outlet />
            </section>
        </>
    )
}
