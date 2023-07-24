import { useEffect, useState } from "react";

const NavBar = () => {
    const [sticky, setSticky] = useState(false);
    const menuLinks = [
        { name: "Home", link: "#home" },
        { name: "About", link: "#about" },
        { name: "Skills", link: "#skills" },
        { name: "Projects", link: "#project" },
        { name: "Contact", link: "#contact" },
    ];

    useEffect(() => {
        window.addEventListener("scroll", () => {
            const nav = document.querySelector("nav");
            window.scrollY > 0 ? setSticky(true) : setSticky(false)
        })
    }, []);

    return (
        <nav className={`fixed w-full left-0 top-0 z-[999] 
    ${sticky ?
                'md:bg-white text-gray-900' :
                'text-white'}
  `}>
            <div className="flex items-center justify-evenly">
                <div className="mx-7">
                    <h4 className="text-4xl font-bold">
                        <span className="text-cyan-600">SMart</span>Tech
                    </h4>
                </div>
                <div className={` ${sticky ? "md:bg-white/0 bg-white" : "bg-white"} text-gray-900 md:block hidden px-7 py-2 font-medium rounded-full`}>
                    <ul className="flex items-center gap-1 py-2 text-lg">
                        {menuLinks?.map((menu, i) => (
                            <li key={i} className="px-4 hover:text-cyan-600">
                                <a href="{menu?.link}">{menu?.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="">
                    <button className="font-medium text-white rounded-md  bg-cyan-600 md:block px-3 py-1 ">Login</button>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
