import NavBar from "../../components/NavBar";
import Team from "./sections/team";

export default function Landing() {
    return (
        <>
            <NavBar home={false} />
            <div className="pt-28">
                <Team />
            </div>
        </>
    )
}