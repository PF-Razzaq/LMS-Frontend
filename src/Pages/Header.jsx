import React, { useState } from "react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-black p-4 text-white shadow-md sticky start-0">
            <div className="flex md:justify-between flex-col md:flex-row md:mx-20 lg:mx-40">
                <div className="flex justify-between mx-5">
                    <div>
                        <a className="text-xl" href="#">
                            Learn Online
                        </a>
                    </div>
                    <div>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden text-white focus:outline-none flex flex-col"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                <div
                    className={`${isOpen ? "block" : "hidden"
                        } w-full md:flex md:items-center md:w-auto`}
                >
                    <ul className="md:flex md:space-x-10">
                        <li>
                            <a className="ml-5 md:mt-0 mt-5 block md:inline-block lg:mt-0 hover:text-gray-400  focus:text-gray-400" href="#">
                                Home
                            </a>
                        </li>
                        <li>
                            <a className="ml-5 md:mt-0 mt-5 block md:inline-block lg:mt-0 hover:text-gray-400 focus:text-gray-400" href="#">
                                Courses
                            </a>
                        </li>
                        <li>
                            <a className="ml-5 md:mt-0 mt-5 block md:inline-block lg:mt-0 hover:text-gray-400 focus:text-gray-400" href="#">
                                Teachers
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
