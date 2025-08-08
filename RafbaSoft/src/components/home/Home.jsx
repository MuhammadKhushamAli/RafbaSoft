import IntroImg from '/assets/IntroImg.png';
import InView from '../inView/InView';
import DetailList from './DetailList';
import ServicesCard from '../Card';
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef, useState } from 'react';

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

const customer = ['ABS.jpg',
    'City.jpg',
    'Corvit.jpg',
    'Informatics.jpg',
    'Muscular.jpg',
    'Shell.jpg'
];


export default function Home() {
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.1
    });

    const [projectCounter, setProjectCounter] = useState(0);
    const [smpCounter, setSMPCounter] = useState(0);
    const [clientCounter, setClientCounter] = useState(0);
    const isProjectCompleted = useRef(false);
    const isSMPProjectCompleted = useRef(false);
    const isClientCompleted = useRef(false);
    useEffect(() => {
        let interval = null;
        console.log(inView)
        if (inView && (!isClientCompleted.current || !isProjectCompleted.current || !isSMPProjectCompleted.current)) {
            const projectCount = 20;
            const SMPCount = 552;
            const clientCount = 100;

            interval = setInterval(() => {
                if (!isProjectCompleted.current) {
                    setProjectCounter(prev => {
                        if (prev < projectCount)
                            return prev + 1;
                        isProjectCompleted.current = true;
                        return prev;
                    });
                }

                if (!isSMPProjectCompleted.current) {
                    setSMPCounter(prev => {
                        if (prev < SMPCount)
                            return prev + 1;
                        isSMPProjectCompleted.current = true;
                        return prev;
                    });
                }
                if (!isClientCompleted.current) {
                    setClientCounter(prev => {
                        if (prev < clientCount)
                            return prev + 1;
                        isClientCompleted.current = true;
                        return prev;
                    });
                }

                if (isProjectCompleted.current && isClientCompleted.current && isSMPProjectCompleted.current) {
                    clearInterval(interval);
                }
            }, 50)
        }
        return () => clearInterval(interval);
    }, [inView]);

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
                    className='w-full
            p-[10%]
            pt-[5%]
            max-sm:p-[5%]
            max-sm:pt-[2%]
            flex
            flex-row
            flex-wrap
            justify-evenly
            items-center
            gap-9
            box-border
            overflow-hidden'>
                    {customer.map((customer) => (
                        <ServicesCard imageUrl={`/customers/${customer}`} disabled={true} hidden={true} className={'object-contain m-auto'} />
                    ))}
                </div>
            </InView>

            <InView
                beforeClassName={'opacity-0 translate-x-[200px]'}
                afterClassName={'opacity-100 tansition-all translate-x-0 duration-700'}
                className={`w-full
                p-[10%]
                max-sm:p-[2%]
                h-screen
                box-border`}>
                <div
                    ref={ref}
                    className='flex flex-row max-md:flex-col justify-between items-center h-full w-full'>
                    <div>
                        <h4
                            className='font-[Montserrat] font-black text-4xl max-sm:text-3xl'>Our Projects</h4>
                        <h4
                            className='font-[Montserrat] font-black text-5xl max-sm:text-4xl'>
                            {projectCounter}+
                        </h4>
                    </div>
                    <div>
                        <h4
                            className='font-[Montserrat] font-black text-4xl max-sm:text-3xl'>Our SBP</h4>
                        <h4
                            className='font-[Montserrat] font-black text-5xl max-sm:text-4xl'>
                            {smpCounter}+
                        </h4>
                    </div>
                    <div>
                        <h4
                            className='font-[Montserrat] font-black text-4xl max-sm:text-3xl'>Our Clients</h4>
                        <h4
                            className='font-[Montserrat] font-black text-5xl max-sm:text-4xl'>
                            {clientCounter}+
                        </h4>
                    </div>

                </div>
            </InView>

            <InView
                beforeClassName={'opacity-0 translate-x-[200px]'}
                afterClassName={'opacity-100 tansition-all translate-x-0 duration-700'}
                className={`w-full
            p-[10%]
            max-sm:p-[5%]
            max-sm:mt-[15%]
            max-sm:mb-[15%]
            box-border`}>
                <h2
                    className='w-full text-5xl max-sm:text-3xl text-center font-black font-[Montserrat] uppercase'>Vision</h2>
                <p
                    className='font-[Roboto] text-center'>To become a globally recognized software company, enabling businesses to thrive through intelligent, reliable, and fully customized digital systems.
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
                box-border`}>
                {experies.map((experty) => (
                    <DetailList key={experty.heading} heading={experty.heading} details={experty.details} />
                ))}
            </div>
        </main >
    )
}