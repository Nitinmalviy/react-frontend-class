import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <div className="flex w-full flex-wrap">
            <div className="flex w-full flex-col md:w-1/2 lg:w-1/3">

                <div className="my-auto flex flex-col justify-center px-6 pt-8 sm:px-24 md:justify-start md:px-8 md:pt-0 lg:px-12">
                    <Link to={"/"} className="flex justify-center items-center whitespace-nowrap text-2xl font-black">
                        <span className="mr-2 text-4xl text-blue-500">
                            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="M6.925 16.875Q5.2 16.225 4.1 14.713Q3 13.2 3 11.25q0-1.975.938-3.513Q4.875 6.2 6 5.15q1.125-1.05 2.062-1.6L9 3v2.475q0 .625.45 1.062q.45.438 1.075.438q.35 0 .65-.15q.3-.15.5-.425L12 6q.95.55 1.625 1.35t1.025 1.8l-1.675 1.675q-.05-.6-.287-1.175q-.238-.575-.638-1.05q-.35.2-.738.287q-.387.088-.787.088q-1.1 0-1.987-.612Q7.65 7.75 7.25 6.725q-.95.925-1.6 2.062Q5 9.925 5 11.25q0 .775.275 1.462q.275.688.75 1.213q.05-.5.287-.938q.238-.437.588-.787L9 10.1l2.15 2.1q.05.05.1.125t.1.125l-1.425 1.425q-.05-.075-.087-.125q-.038-.05-.088-.1L9 12.925l-.7.7q-.125.125-.212.287q-.088.163-.088.363q0 .3.175.537q.175.238.45.363ZM9 10.1Zm0 0ZM7.4 22L6 20.6L19.6 7L21 8.4L17.4 12H21v2h-5.6l-.5.5l1.5 1.5H21v2h-2.6l2.1 2.1l-1.4 1.4l-2.1-2.1V22h-2v-4.6l-1.5-1.5l-.5.5V22h-2v-3.6Z" /></svg>
                        </span>
                        streamio
                    </Link>
                    <p className="text-center text-3xl font-bold">Welcome</p>
                    <p className="mt-2 text-center">Login to access your account.</p>
                    <form className="flex flex-col pt-3 md:pt-8">
                        <div className="flex flex-col pt-4">
                            <div className="relative flex overflow-hidden rounded-lg border focus-within:border-transparent focus-within:ring-2 transition focus-within:ring-blue-600">
                                <span className="inline-flex items-center border-r border-gray-300 bg-white px-3 text-sm text-gray-500 shadow-sm">
                                    <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z"></path>
                                    </svg>
                                </span>
                                <input type="email" id="login-email" className="w-full flex-1 appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400  focus:outline-none" placeholder="Email" />
                            </div>
                        </div>
                        <div className="mb-12 flex flex-col pt-4">
                            <div className="relative flex overflow-hidden rounded-lg border focus-within:border-transparent focus-within:ring-2 transition focus-within:ring-blue-600">
                                <span className="inline-flex items-center border-r border-gray-300 bg-white px-3 text-sm text-gray-500 shadow-sm">
                                    <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1376 768q40 0 68 28t28 68v576q0 40-28 68t-68 28h-960q-40 0-68-28t-28-68v-576q0-40 28-68t68-28h32v-320q0-185 131.5-316.5t316.5-131.5 316.5 131.5 131.5 316.5q0 26-19 45t-45 19h-64q-26 0-45-19t-19-45q0-106-75-181t-181-75-181 75-75 181v320h736z"></path>
                                    </svg>
                                </span>
                                <input type="password" id="login-password" className="w-full flex-1 appearance-none border-gray-300 bg-white py-2 px-4 text-base text-gray-700 placeholder-gray-400  focus:outline-none" placeholder="Password" />
                            </div>
                        </div>
                        <button type="submit" className="w-full rounded-lg bg-blue-700 px-4 py-2 text-center text-base font-semibold text-white shadow-md transition ease-in hover:bg-blue-600 focus:outline-none focus:ring-2">
                            <span className="w-full"> Submit </span>
                        </button>
                    </form>
                    <div className="pt-12 pb-12 text-center">
                        <p className="whitespace-nowrap">
                            Don't have an account?
                            <Link to={"/register"} className="font-semibold underline"> Register here. </Link>
                        </p>
                    </div>
                </div>
            </div>
            <div className="pointer-events-none hidden select-none bg-black shadow-2xl md:block md:w-1/2 lg:w-2/3">
                <img className="h-screen w-full object-cover opacity-90" src="https://images.unsplash.com/photo-1606160054803-1d3628097c07?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b2NlbnxlbnwwfHwwfHx8MA%3D%3D" />
            </div>
        </div>

    )
}
