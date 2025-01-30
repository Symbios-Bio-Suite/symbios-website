import NavBar from "../../components/NavBar";
import Hero from "./sections/hero";

export default function Landing() {
    return (
        <>
            <NavBar home={true} />
            <div className="pt-32">
                <Hero />
            </div>
        </>
    )
}