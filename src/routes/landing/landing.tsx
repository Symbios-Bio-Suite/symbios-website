import NavBar from "../../components/NavBar";
import Team from "../about/sections/team";
import Hero from "./sections/hero";
import Organizations from "./sections/organizations";
import Showcase from "./sections/showcase";

export default function Landing() {
    return (
        <>
            <NavBar home={true} />
            <div className="pt-32">
                <Hero />
                <Organizations />
                <Showcase />
                <Team />
            </div>
        </>
    )
}