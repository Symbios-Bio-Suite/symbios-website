import MemberCard from "../../../components/MemberCard";
import logo_image from "../../../assets/logo-image.png";

export default function Team() {
    return (
        <div className="flex flex-col items-center px-6">
            <img src={logo_image} className="w-10 mb-2" />
            <div className="text-4xl font-bold mb-10">Meet Our Team</div>
            <div className="flex flex-wrap place-content-center gap-6 w-full">
                <MemberCard name={"Bob"} role={"Developer"} color={true} />
                <MemberCard name={"Bob"} role={"Developer"} color={false} />
                <MemberCard name={"Bob"} role={"Developer"} color={true} />
                <MemberCard name={"Bob"} role={"Developer"} color={false} />
            </div>
        </div>
    )
}