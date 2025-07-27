import IntroImg from '../../assets/IntroImg.png';
import TextileImg from '../../assets/Textile.png'
import GymImg from '../../assets/Gym.png'

export default function Home() {
    return (
        <main
            className='grid grid-cols-1 w-screen'>
            <article
                className='flex flex-row justify-between items-center p-[10%] max-sm:p-[5%] h-screen'>
                <h1
                    className='w-[30%] text-5xl text-center font-semibold font-serif uppercase max-sm:text-lg max-sm:w-[5%]'>We build smart software that simplifies business</h1>
                <img src={IntroImg} alt="Intro_Image"
                    className='w-[40%]' />
            </article>
            <article>
                <h2
                    className='w-screen text-4xl text-center font-semibold font-serif uppercase max-sm:text-lg'>Why Rafba Soft?</h2>
            </article>
            <article
                className='flex flex-row justify-between items-center p-[10%] max-sm:p-[5%] h-screen'>
                <img src={TextileImg} alt="Textile-Image"
                    className='w-[40%]' />
                <h3
                    className='w-[30%] text-xl text-center font-serif uppercase max-sm:text-lg max-sm:w-[5%]'>Our textile software simplifies every stage of textile production from design and weaving to inventory and order management. With powerful automation, real-time tracking, and industry-specific features, it helps textile businesses boost productivity, reduce waste, and stay competitive.</h3>
            </article>
            <article
                className='flex flex-row justify-between items-center p-[10%] max-sm:p-[5%] h-screen'>
                <h3
                    className='w-[30%] text-xl text-center font-serif uppercase max-sm:text-lg max-sm:w-[5%]'>Our gym software is designed to streamline fitness center operations from membership management and class scheduling to billing and attendance tracking. With an intuitive dashboard and smart automation, it helps gyms save time, engage clients, and grow faster.</h3>
                <img src={GymImg} alt="Gym_Image"
                    className='w-[40%]' />
            </article>
             <article
                className='flex flex-row justify-between items-center p-[10%] max-sm:p-[5%] h-screen'>
                <img src={TextileImg} alt="Textile-Image"
                    className='w-[40%]' />
                <h3
                    className='w-[30%] text-xl text-center font-serif uppercase max-sm:text-lg max-sm:w-[5%]'>Our pharmacy management software is built to optimize every aspect of a pharmacy's workflow. From inventory tracking and automated refills to sales reports and prescription management, it ensures accuracy, efficiency, and regulatory compliance helping pharmacists serve customers faster and more safely.</h3>
            </article>
        </main>
    )
}