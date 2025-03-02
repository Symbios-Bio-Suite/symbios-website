import Footer from "@/components/Footer";
import NavBar from "../../components/NavBar";
import Hero from "./sections/hero";
import Organizations from "./sections/organizations";
import Showcase from "./sections/showcase";
import Mission from "./sections/mission";

export default function Landing() {
    return (
        <>
            <NavBar home={true} />
            <div className="py-32">
                <Hero />
                <Organizations />
                <Mission />
                <Showcase />
            </div>
            <Footer />
        </>
    )
}