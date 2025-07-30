import IntroImg from '/assets/IntroImg.png';
import TextileImg from '/assets/Textile.png'
import GymImg from '/assets/Gym.png'
import { useEffect, useRef, useState } from 'react';
import InView from '../inView/InView';


export default function Home() {
    const [customersLogos, setCustomersLogos] = useState(['ABS.jpg',
        'City.jpg',
        'Corvit.jpg',
        'Informatics.jpg',
        'Muscular.jpg',
        'Shell.jpg']);
    const [isAnimation, setIsAnimation] = useState(false);

    const animationInterval = useRef(null);
    const animationTimeout = useRef(null);

    useEffect(() => {

        animationInterval.current = setInterval(() => {
            setIsAnimation(true);
            animationTimeout.current = setTimeout(() => {
                setCustomersLogos((prev) => {
                    const [firstOne, ...remaining] = prev;
                    return [...remaining, firstOne];
                })
                setIsAnimation(false);
            }, 500)
        }, 2000);


        return () => {
            clearTimeout(animationTimeout.current);
            clearInterval(animationInterval.current);
        }
    }, [])

    return (
        <main
            className='grid
            grid-cols-1
            w-full
            box-border
            overflow-hidden'>

            <InView
                beforeClassName={'opacity-0 -translate-y-[100px]'}
                afterClassName={'opacity-100 transition-all translate-y-0 duration-700'}
                className={`w-full
                flex
                flex-row
                justify-between
                items-center
                p-[10%]
                max-sm:p-[2%]
                max-sm:mt-[10%]
                max-sm:mb-[10%]
                h-screen
                max-sm:h-[80%]
                box-border`}>
                <h1
                    className='font-[Montserrat] w-[30%] max-sm:w-[50%] text-5xl text-center font-semibold uppercase max-sm:text-lg'>We build smart software that simplifies business</h1>
                <img src={IntroImg} alt="Intro_Image"
                    className='w-[40%] max-sm:w-[50%]' />
            </InView>

            <InView
                beforeClassName={'opacity-0 -translate-x-[200px]'}
                afterClassName={'opacity-100 tansition-all translate-x-0 duration-700'}
                className={`w-full
                p-[10%]
                max-sm:p-[5%]
                max-sm:mt-[15%]
                max-sm:mb-[15%]`}
                thresholdVal={0.1}>
                <h1
                    className='w-full
                text-5xl
                max-sm:text-3xl
                text-center
                font-black
                font-[Montserrat]
                font-
                p-[2%]
                box-border'>
                    Our Customers
                </h1>
                <div
                    className='flex
                    flex-row
                    justify-between
                    m-auto
                    w-[50%]
                    max-sm:w-[80%]
                    overflow-hidden
                    whitespace-nowrap'>
                    {customersLogos.map((customer, i) => (
                        <img src={`/customers/${customer}`} alt='Coustomer Logo'
                            className={`w-[20%] object-contain
                                ${isAnimation && 'transition-transform duration-500 ease-in-out -translate-x-[100%]'}`} key={i} />
                    ))}
                </div>
            </InView>

            <InView
                beforeClassName={'opacity-0 translate-x-[200px]'}
                afterClassName={'opacity-100 tansition-all translate-x-0 duration-700'}
                className={`w-full
            p-[10%]
            max-sm:p-[2%]
            box-border`}>
                <h2
                    className='w-full text-4xl max-sm:text-3xl text-center font-semibold font-[Montserrat] uppercase'>Why Rafba Soft?</h2>
            </InView>

            <InView
                beforeClassName={'opacity-0 translate-y-[200px]'}
                afterClassName={'opacity-100 tansition-all translate-y-0 duration-700'}
                className={`w-full
                flex
                flex-row
                max-sm:flex-col
                justify-between
                max-sm:justify-evenly
                items-center
                p-[10%]
                max-sm:p-[2%]
                h-screen
                box-border`}>
                <img src={TextileImg} alt="Textile-Image"
                    className='w-[40%] max-sm:w-full' />
                <p
                    className='w-[30%] max-sm:w-full max-sm:p-[10%] text-xl text-center font-[Roboto] uppercase max-sm:text-lg'>Our textile software simplifies every stage of textile production from design and weaving to inventory and order management. With powerful automation, real-time tracking, and industry-specific features, it helps textile businesses boost productivity, reduce waste, and stay competitive.
                    </p>
            </InView>

            <InView
                beforeClassName={'opacity-0 translate-y-[200px]'}
                afterClassName={'opacity-100 tansition-all translate-y-0 duration-700'}
                className={`w-full
                flex
                flex-row
                max-sm:flex-col-reverse
                justify-between
                items-center
                p-[10%]
                max-sm:p-[5%]
                h-screen
                box-border`}>
                <p
                    className='w-[30%] max-sm:w-full max-sm:p-[10%] text-xl text-center font-[Roboto] uppercase max-sm:text-lg'>Our gym software is designed to streamline fitness center operations from membership management and class scheduling to billing and attendance tracking. With an intuitive dashboard and smart automation, it helps gyms save time, engage clients, and grow faster.
                    </p>
                <img src={GymImg} alt="Gym_Image"
                    className='w-[40%] max-sm:w-full' />
            </InView>

            <InView
                beforeClassName={'opacity-0 translate-y-[200px]'}
                afterClassName={'opacity-100 tansition-all translate-y-0 duration-700'}
                className={`w-full
                flex
                flex-row
                max-sm:flex-col
                justify-between
                max-sm:justify-evenly
                items-center
                p-[10%]
                max-sm:p-[2%]
                h-screen
                box-border`}>
                <img src={TextileImg} alt="Textile-Image"
                    className='w-[40%] max-sm:w-full' />
                <h3
                    className='w-[30%] max-sm:w-full max-sm:p-[10%] text-xl max-sm:text-lg text-center font-[Roboto] uppercase'>Our pharmacy management software is built to optimize every aspect of a pharmacy's workflow. From inventory tracking and automated refills to sales reports and prescription management, it ensures accuracy, efficiency, and regulatory compliance helping pharmacists serve customers faster and more safely.</h3>
            </InView>
        </main >
    )
}