import { useInView } from "react-intersection-observer";
import { useState, useEffect, useRef } from "react";
export default function Counter({ totalCount, title, unit })
{
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1
    });

    const [counter, setCounter] = useState(0);
    const isCounterCompleted = useRef(false);

    useEffect(() => {
        let interval = null;
        if (inView && !isCounterCompleted.current) {
            const count = totalCount;
            interval = setInterval(() => {
                setCounter(prev => {
                    if (prev < count)
                        return prev + 1;
                    isCounterCompleted.current = true;
                    return prev;
                });

                if (isCounterCompleted.current) {
                    clearInterval(interval);
                }
            }, 50)
        }
        return () => clearInterval(interval);
    }, [inView]);

    return (
        <div
            className='w-min max-md:w-full flex flex-col justify-center items-center'
            ref={ref}>
            <h4
                className='font-[Montserrat] font-black text-4xl max-sm:text-3xl'>{title}
            </h4>
            <h4
                className='font-[Montserrat] font-black text-5xl max-sm:text-4xl'>
                {counter}{unit}
            </h4>
        </div>
    );
}