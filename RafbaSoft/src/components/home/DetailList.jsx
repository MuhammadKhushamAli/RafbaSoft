import { useState } from "react";
import InView from "../inView/InView";

export default function DetailList({ heading, details }) {
    const [isClicked, setIsClicked] = useState(false);
    return (
        <InView
            beforeClassName={'opacity-0 translate-x-[200px]'}
            afterClassName={'opacity-100 tansition-all translate-x-0 duration-700'}
            className="w-full mt-[10%] mb-[10%] overflow-hidden">
            <ul>
                <div
                    className="flex flex-row w-full justify-between items-center p-2 border-b-2">
                    <li
                        className="font-[Roboto] text-xl
                        list-inside
                        list-disc">
                        {heading}
                    </li>
                    <button onClick={() => setIsClicked(prev => !prev)}
                        className={`transition-transform duration-700 ${isClicked ? 'rotate-45' : 'rotate-0'}`}>
                        +</button>
                </div>
            </ul>
            <ul>
                {isClicked && details.map((detail) => (
                    <InView
                        key={detail}
                        beforeClassName={'opacity-0 translate-x-[200px]'}
                        afterClassName={'opacity-100 tansition-all translate-x-0 duration-700'}
                        className="w-full ml-14 border-b-1 m-3">
                        <li
                            className="list-disc">{detail}</li>
                    </InView>
                ))}
            </ul >
        </InView >
    )
}