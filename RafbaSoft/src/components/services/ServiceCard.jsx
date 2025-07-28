import { useState } from "react";

export default function ServicesCard({ imageUrl, description }) {
    const [isClicked, setIsClicked] = useState(false);
    return (
        <div
            className="w-[30%]
            min-h-[400px]
            p-[2%]
            text-black
            shadow-2xl
            shadow-gray-300
            rounded-2xl
            flex
            flex-col
            justify-between
            items-center">
            <img src={imageUrl} alt="Service_Image"
            className="w-[356px]
            h-[200px]
            rounded-2xl
            object-cover"/>
            {isClicked ?
                <p
                    className="text-center font-serif pb-2 pt-2">{description}
                </p> : null}
            <button onClick={() => setIsClicked(prev => !prev)}
                className="bg-red-500
                text-white
                p-2
                rounded-2xl
                shadow-2xl
                shadow-black">
                {isClicked ? 'Hide Detail' : 'Show Detail'}
            </button>
        </div>
    )
}