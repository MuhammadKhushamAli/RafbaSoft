import InView from '../inView/InView';

export default function AboutUs() {
    return (
        <main
            className="w-full
        p-[10%]
        pt-[5%]
        max-sm:p-[5%]
        max-sm:pt-[2%]
        h-screen
        box-border
        overflow-hidden">
            <InView
                beforeClassName={'opacity-0 -translate-x-[200px]'}
                afterClassName={'opacity-100 transition-transform translate-x-0 duration-700'}
                className={'w-full max-sm:mt-[15%]'}>
                <h1
                    className="w-full text-6xl max-sm:text-5xl text-center font-black font-[Montserrat] pb-[5%] max-sm:pb-[2%]
                    max-sm:mb-[10%]"
                >
                    About Us
                </h1>
            </InView>

            <InView
                beforeClassName={'opacity-0 translate-y-[200px]'}
                afterClassName={'opacity-100 transition-transform translate-y-0 duration-700'}
                className={'w-full'}>
                <p
                className='text-center font-[Roboto]'>Founded in 2023, Rafba Soft began its journey with a simple vision — to empower businesses through smart, custom-built software solutions. Starting with ERP systems developed in Oracle, we quickly gained recognition for crafting high-performance, business-specific applications that simplify operations and drive growth.

                    As the business landscape evolved, so did we. Today, Rafba Soft proudly offers end-to-end Odoo ERP solutions alongside fully customized software tailored to the unique needs of industries like retail, fitness, textiles, petroleum, and healthcare.

                    Driven by innovation, fueled by customer success, and built on trust — Rafba Soft is now growing rapidly, serving both local and international clients with a commitment to quality, scalability, and digital transformation.
                </p>
            </InView>
        </main>
    )
}