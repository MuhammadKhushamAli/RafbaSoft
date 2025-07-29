import IntroImg from '/assets/IntroImg.png';
import TextileImg from '/assets/Textile.png'
import GymImg from '/assets/Gym.png'

const customersLogos = [
    'ABS.jpg',
    'City.jpg',
    'Corvit.jpg',
    'Informatics.jpg',
    'Muscular.jpg',
    'Shell.jpg'
]

export default function Home() {
    return (
        <main
            className='grid
            grid-cols-1
            w-full
            box-border'>
            <article
                className='w-full
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
                box-border'>
                <h1
                    className='w-[30%] max-sm:w-[50%] text-5xl text-center font-semibold font-serif uppercase max-sm:text-lg'>We build smart software that simplifies business</h1>
                <img src={IntroImg} alt="Intro_Image"
                    className='w-[40%] max-sm:w-[50%]' />
            </article>

            <article
                className='w-full p-[10%] max-sm:p-[2%]'>
                <h1
                    className='w-full
                text-5xl
                max-sm:text-3xl
                text-center
                font-black
                font-serif
                p-[2%]
                box-border'>
                    Our Customers
                </h1>
                <div
                    className='flex flex-row justify-evenly w-full'>
                    {customersLogos.map(customer => (
                        <img src={`/customers/${customer}`} alt='Coustomer Logo'
                            className='w-[10%]' />
                    ))}
                </div>
            </article>

            <article
                className='w-full
            p-[10%]
            max-sm:p-[2%]
            box-border'>
                <h2
                    className='w-full text-4xl max-sm:text-3xl text-center font-semibold font-serif uppercase'>Why Rafba Soft?</h2>
            </article>

            <article
                className='w-full
                flex
                flex-row
                max-sm:flex-col
                justify-between
                max-sm:justify-evenly
                items-center
                p-[10%]
                max-sm:p-[2%]
                h-screen
                box-border'>
                <img src={TextileImg} alt="Textile-Image"
                    className='w-[40%] max-sm:w-full' />
                <h3
                    className='w-[30%] max-sm:w-full text-xl text-center font-serif uppercase max-sm:text-lg'>Our textile software simplifies every stage of textile production from design and weaving to inventory and order management. With powerful automation, real-time tracking, and industry-specific features, it helps textile businesses boost productivity, reduce waste, and stay competitive.</h3>
            </article>

            <article
                className='w-full
                flex
                flex-row
                max-sm:flex-col-reverse
                justify-between
                items-center
                p-[10%]
                max-sm:p-[5%]
                h-screen
                box-border'>
                <h3
                    className='w-[30%] max-sm:w-full text-xl text-center font-serif uppercase max-sm:text-lg'>Our gym software is designed to streamline fitness center operations from membership management and class scheduling to billing and attendance tracking. With an intuitive dashboard and smart automation, it helps gyms save time, engage clients, and grow faster.</h3>
                <img src={GymImg} alt="Gym_Image"
                    className='w-[40%] max-sm:w-full' />
            </article>

            <article
                className='w-full
                flex
                flex-row
                max-sm:flex-col
                justify-between
                max-sm:justify-evenly
                items-center
                p-[10%]
                max-sm:p-[2%]
                h-screen
                box-border'>
                <img src={TextileImg} alt="Textile-Image"
                    className='w-[40%] max-sm:w-full' />
                <h3
                    className='w-[30%] max-sm:w-full text-xl max-sm:text-lg text-center font-serif uppercase'>Our pharmacy management software is built to optimize every aspect of a pharmacy's workflow. From inventory tracking and automated refills to sales reports and prescription management, it ensures accuracy, efficiency, and regulatory compliance helping pharmacists serve customers faster and more safely.</h3>
            </article>
        </main>
    )
}