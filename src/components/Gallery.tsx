import { useState } from "react";
import gall1 from "../assets/gall1.png";
import gall2 from "../assets/gall2.png";
import gall3 from "../assets/gall3.png";
import gall4 from "../assets/gall4.png";

export default function Gallery() {
    const images = [gall1, gall2, gall3, gall4];
    const totalImages = images.length;

    const [index, setIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(true);

    const next = () => {
        if (index === totalImages - 1) {
            setIsTransitioning(true);
            setIndex(totalImages);
            setTimeout(() => {
                setIsTransitioning(false);
                setIndex(0);
            }, 500);
        } else {
            setIsTransitioning(true);
            setIndex((prevIndex) => prevIndex + 1);
        }
    };

    const prev = () => {
        if (index === 0) {
            setIsTransitioning(true);
            setIndex(-1);
            setTimeout(() => {
                setIsTransitioning(false);
                setIndex(totalImages - 1);
            }, 500);
        } else {
            setIsTransitioning(true);
            setIndex((prevIndex) => prevIndex - 1);
        }
    };

    return (
        <div className="w-full flex flex-col items-center justify-center overflow-hidden">
            <div className="w-[1800px] overflow-hidden">
                <div
                    className={`flex ${isTransitioning ? 'transition-transform duration-500 ease-in-out' : ''}`}
                    style={{ transform: `translateX(-${(index + 1) * 600}px)` }}
                >
                    <div className="w-[600px] h-[300px] shrink-0">
                        <img src={images[totalImages - 1]} className="w-full h-full object-cover rounded-lg shadow-md" />
                    </div>
                    {images.map((image, i) => (
                        <div key={i} className="w-[600px] h-[300px] shrink-0">
                            <img 
                                src={image} 
                                className="w-full h-full object-cover rounded-lg shadow-md" 
                            />
                        </div>
                    ))}
                    <div className="w-[600px] h-[300px] shrink-0">
                        <img src={images[0]} className="w-full h-full object-cover rounded-lg shadow-md" />
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center gap-x-2 mt-4">
                <div className="w-20 text-lg font-bold">
                    {`${String(((index % totalImages) + 1)).padStart(2, '0')}/${String(totalImages).padStart(2, '0')}`}
                </div>
                <button onClick={prev} className="text-2xl font-black cursor-pointer">
                    ←
                </button>
                <button onClick={next} className="text-2xl font-black cursor-pointer">
                    →
                </button>
            </div>
        </div>
    );
}