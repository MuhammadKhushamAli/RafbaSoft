import { useState } from "react";
import InView from "../inView/InView";

export default function DetailList({ heading, details }) {
    const [isClicked, setIsClicked] = useState(false);
    return (
        <InView
            beforeClassName={'opacity-0 translate-x-[200px]'}
            afterClassName={'opacity-100 tansition-all translate-x-0 duration-700'}
            className="w-full overflow-hidden">
            <div
                className="flex flex-row w-full justify-between items-center p-2 border-b-2">
                <h3
                    className="font-[Roboto]">{heading}</h3>
                <button onClick={() => setIsClicked(prev => !prev)}
                    className={`transition-transform duration-700 ${isClicked ? 'rotate-45' : 'rotate-0'}`}>
                        +</button>
            </div>
            {isClicked && details.map((detail) => (
                <InView
                key={detail}
                    beforeClassName={'opacity-0 translate-x-[200px]'}
                    afterClassName={'opacity-100 tansition-all translate-x-0 duration-700'}
                    className="w-full ml-14 border-b-1 m-3">
                    {detail}
                </InView>
            ))}
        </InView>
    )
}