import { useState } from "react"

export default function ServicesCards({ imageUrl, description }) {
    const [isClicked, setIsClicked] = useState(false);
    return (
        <div
            className="w-[30%] h-[50%] shadow-2xl shadow-gray-400 rounded-2xl p-[5%]">
            <img src={imageUrl} alt="Service_Image" />
            {isClicked ?
                <p
                    className="text-center">{description}
                </p> : null}
            <button onClick={() => setIsClicked(prev => !prev)}>
                {isClicked ? 'Hide Detail' : 'Show Detail'}
            </button>
        </div>
    )
}