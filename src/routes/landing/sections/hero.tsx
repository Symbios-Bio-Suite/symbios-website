import TypingAnimation from "../../../components/TypingAnimation";

export default function Hero() {
    return (
        <>
            <div className="h-[480px] w-[640px] flex flex-col place-content-center px-6">
                {/* <TypingAnimation /> */}
                <div className="flex flex-col">
                    <div className="text-lg uppercase font-bold text-gray-700">
                        Robotics Engineering
                    </div>
                    <div className="text-5xl font-semibold">
                        Accessible high-fidelity prosthetics made by students
                    </div>
                    <div className="text-xl mt-6">
                        A student-led exploration into low-cost yet high-fidelity prosthetics. Our goal is to create an accessible, life-like prosthetic arm using principles of biomimicry, soft materials, and additive manufacturing.
                    </div>
                </div>
            </div>
        </>
    )
}