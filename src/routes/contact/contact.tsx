import NavBar from "../../components/NavBar";
import Message from "./sections/message";

export default function Form() {
    return (
        <>
            <NavBar home={false} />
            <div className="pt-32">
                <Message />
            </div>
        </>
    )
}