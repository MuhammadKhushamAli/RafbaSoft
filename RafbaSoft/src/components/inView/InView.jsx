import { useInView } from "react-intersection-observer";

export default function InView({children, beforeClassName = '', afterClassName = '', className = ''})
{
    const {ref, inView} = useInView({triggerOnce: false,
        threshold: 0.1
    });

    return(
        <div
            ref = {ref}
            className={`${inView ? afterClassName : beforeClassName} ${className}`}
        >
        {children}
        </div>
    );
}