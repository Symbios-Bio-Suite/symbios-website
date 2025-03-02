import NavBar from "../../components/NavBar";
import Team from "./sections/team";

export default function About() {
    return (
        <>
            <NavBar home={false} />
            <div className="pt-32">
                <Team />
            </div>
        </>
    )
}