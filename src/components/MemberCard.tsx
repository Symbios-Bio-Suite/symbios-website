import './components.css';
import logo_image from "../assets/logo-image.png";

export default function Member({ name, role, color } : { name: String, role: String, color: Boolean }) {
    return (
        <div className={`w-full max-w-80 flex flex-row h-96 rounded-tl-[75px] rounded-tr-sm rounded-bl-sm rounded-br-[75px] ${color ? 'navy' : 'pink'}`}>
            <div className="absolute rounded-tl-[75px] rounded-tr-sm rounded-bl-sm rounded-br-[75px] w-full max-w-80">
                <img src={logo_image} className="relative w-full" />
            </div>
            <div className="px-6 pb-4 flex flex-col justify-end">
                <div className="text-2xl font-semibold">{name}</div>
                <div className="text-lg font-medium">{role}</div>
            </div>
        </div>
    )
}