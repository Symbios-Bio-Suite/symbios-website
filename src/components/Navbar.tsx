import { useEffect, useState } from "react";
import logo_image from "../assets/logo-image.png";
import logo_text from "../assets/logo-text.png";
import { Link } from "react-router-dom";

export default function NavBar({ home } : { home: Boolean }) {

    const [scroll, setScroll] = useState(false);
    const [menu, setMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScroll(true);
            } else {
                setScroll(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`w-full flex flex-col justify-center bg-white shadow-lg text-white fixed px-6 transition-all duration-300 z-50 ${menu ? "bg-opacity-100" : "bg-opacity-80"}  ${scroll ? "h-16" : "h-24"}`}>
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center gap-x-2.5">
                    {home ?
                        (<button className="flex flex-row items-center gap-x-3 pr-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <img src={logo_image} className="h-8" />
                            <img src={logo_text} className="hidden sm:block h-8" />
                        </button>)
                        :
                        (<Link to="/" className="flex flex-row items-center gap-x-3 pr-4 cursor-pointer">
                            <img src={logo_image} className="h-8" />
                            <img src={logo_text} className="hidden sm:block h-8" />
                        </Link>)
                    }
                </div>
                <div className="flex flex-row items-center gap-x-10">
                    <Link to="/about" className="hidden sm:block py-1.5 text-black">
                        About
                    </Link>
                    <Link to="/resources" className="hidden sm:block py-1.5 text-black">
                        Resources
                    </Link>
                    <Link to="/contact" className="hidden sm:block bg-slate-100 hover:bg-slate-200 font-medium px-3 py-1.5 rounded-lg text-black">
                        Contact
                    </Link>
                    <button className="sm:hidden" onClick={() => setMenu((prev) => !prev)}>
                        <div className="w-4 h-4 flex flex-col justify-between">
                            <span className="w-full h-0.5 bg-black"></span>
                            <span className="w-full h-0.5 bg-black"></span>
                            <span className="w-full h-0.5 bg-black"></span>
                        </div>
                    </button>
                </div>
                {menu && (
                    <div className={`absolute left-0 w-full flex flex-col gap-y-4 px-6 pb-6 pt-4 text-xl transition-all duration-300 text-black bg-white ${scroll ? "top-16" : "top-24"}`}>
                            <button className="font-medium text-left cursor-pointer">About</button>
                            <button className="font-medium text-left cursor-pointer">Resources</button>
                            <button className="font-medium text-left cursor-pointer">Contact</button>
                    </div>
                )}
            </div>
        </div>
    )
}