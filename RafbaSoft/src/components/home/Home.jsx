import IntroImg from '/assets/IntroImg.png';
import InView from '../inView/InView';
import DetailList from './DetailList';
import ServicesCard from '../Card';
import Counter from './Counter';

const experies = [
    {
        heading: 'Core Services',
        details: [
            '🖥 Custom Business Software Development',
            '🔄 ERP Implementation (Oracle & Odoo)',
            '🤖 AI Integration & Custom Chatbot',
            '🏥 Hospital Management Software',
            '🧵 Textile & Stitching ERP',
            '🛢 Petroleum & Fuel Station Software'
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
        heading: 'Technology',
        details: [
            '💻 Customer software development',
            '🔄 Software lifecycle management',
            '🌐 Web development',
            '📱 Mobile app development',
            '☁️ Cloud computing'
        ]
    },
    {
        heading: 'Creative',
        details: [
            '🎨 UX/UI Design',
            '🖌️ Graphic Design',
            '🖥️ 3D Design'
        ]
    },
    {
        heading: 'Strategy',
        details: [
            '🛠️ Software Development Strategy',
            '💼 Consulting Services',
            '📊 CRM and ERP Strategy',
            '🚀 Product and Performance Strategy'
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

const counters = [
    {
        title: 'Interprice Project',
        unit: '+',
        count: 200
    },

    {
        title: 'SBP',
        unit: '+',
        count: 552
    },

    {
        title: 'Satisified Clients',
        unit: '%',
        count: 100
    }
];

export default function Home() {

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
                max-sm:h-auto
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
                        <ServicesCard key={customer}
                            imageUrl={`/customers/${customer}`}
                            disabled={true}
                            hidden={true}
                            className={'object-contain m-auto'} />
                    ))}
                </div>
            </InView>

            <InView
                beforeClassName={'opacity-0 translate-x-[200px]'}
                afterClassName={'opacity-100 tansition-all translate-x-0 duration-700'}
                className={`w-full
                p-[10%]
                max-sm:p-[5%]
                h-screen
                box-border`}>
                <div
                    className='flex flex-row max-md:flex-col justify-between max-md:justify-evenly items-center h-full w-full
                    gap-3 max-md:gap-5'>
                    {
                        counters.map(counter => (
                            <Counter key={counter.title}
                                totalCount={counter.count}
                                unit={counter.unit}
                                title={counter.title} />
                        ))
                    }

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
                    className='w-full
                text-5xl
                max-sm:text-3xl
                text-center
                font-black
                font-[Montserrat]
                p-[2%]
                uppercase
                box-border'>Vision</h2>
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
                box-border`}>
                {experies.map((experty) => (
                    <DetailList key={experty.heading}
                        heading={experty.heading}
                        details={experty.details} />
                ))}
            </div>
        </main >
    )
}