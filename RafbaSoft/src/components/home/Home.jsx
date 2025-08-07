import IntroImg from '/assets/IntroImg.png';
import TextileImg from '/assets/Textile.png'
import GymImg from '/assets/Gym.png'
import { useEffect, useRef, useState } from 'react';
import InView from '../inView/InView';
import DetailList from './detailList';

const experies = [
    {
        heading: 'Core Services',
        details: [
            '🖥 Custom Business Software Development',
            '🔄 ERP Implementation (Oracle & Odoo)',
            '🤖 AI Integration & Custom Chatbot'
        ]
    },
    {
        heading: 'Development (Al-Agent)',
        details: [
            '🧾 Accounting & Finance Software',
            '🏫 University & College Management'
        ]
    },
    {
        heading: 'Systems',
        details: [
            '🏥 Hospital Management Software',
            '🧵 Textile & Stitching ERP',
            '🛢 Petroleum & Fuel Station Software'
        ]
    }
];

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
                    className='font-[Montserrat] w-[30%] max-sm:w-[50%] text-5xl text-center font-bold uppercase max-sm:text-lg'>We build smart software that simplifies business</h1>
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
                    className='w-full text-5xl max-sm:text-3xl text-center font-black font-[Montserrat] uppercase'>Vision</h2>
                <p>To become a globally recognized software company, enabling businesses to thrive through intelligent, reliable, and fully customized digital systems.
                </p>
            </InView>

            <div
                className={`w-full
                flex
                flex-col
                max-sm:flex-col
                justify-between
                max-sm:justify-evenly
                items-start
                p-[10%]
                max-sm:p-[2%]
                h-screen
                max-md:h-[150vh]
                box-border`}>
                    {experies.map((experty) => (
                        <DetailList heading={experty.heading} details={experty.details}/>
                    ))}
            </div>
        </main >
    )
}