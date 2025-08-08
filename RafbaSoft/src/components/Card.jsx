import { useState } from "react";
import InView from "./inView/InView";

export default function ServicesCard({ imageUrl, description, disabled = false, hidden = false, className = ''}) {
    const [isClicked, setIsClicked] = useState(false);
    return (
        <InView
            beforeClassName={'opacity-0 translate-y-[100px]'}
            afterClassName={'opacity-100 tansform-all translate-y-0 duration-700'}
            className={`w-[30%]
            max-md:w-[90%]
            min-h-[400px]
            p-[2%]
            text-black
            shadow-2xl
            shadow-gray-300
            rounded-2xl
            flex
            flex-col
            justify-between
            items-center`}>
                <img src={imageUrl} alt="Service_Image"
                    className={`w-[356px]
            h-[200px]
            rounded-2xl
            ${className}`}/>
                {isClicked ?
                    <p
                        className="text-center font-[Roboto] pb-2 pt-2">{description}
                    </p> : null}
                <button 
                disabled = {disabled}
                hidden = {hidden}
                onClick={() => setIsClicked(prev => !prev)}
                    className="bg-red-500
                text-white
                p-2
                rounded-2xl
                shadow-2xl
                shadow-black">
                    {isClicked ? 'Hide Detail' : 'Show Detail'}
                </button>
        </InView>
    )
}