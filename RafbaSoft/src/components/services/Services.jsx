import ServicesCard from "./ServiceCard";
import InView from "../inView/InView";

const cardsArray = [
    {
        name: 'Artitecture.jpg',
        description: "Our architecture software empowers professionals to design, visualize, and manage building projects with precision. From 2D drafting to 3D modeling and BIM integration, it streamlines workflows for architects, engineers, and designers—enhancing creativity, collaboration, and efficiency."
    },
    {
        name: 'Business.jpg',
        description: "Our business management software offers an all-in-one solution to streamline operations, handle finances, monitor performance, and boost productivity. Whether you're managing a startup or a growing enterprise, it simplifies decision-making through real-time data insights and automation."
    },
    {
        name: 'Clinic.jpg',
        description: "Our clinic management software is designed to streamline patient care, appointment scheduling, medical records, and billing in one secure and user-friendly platform. Enhance efficiency, reduce wait times, and focus more on patient wellness with automated workflows and real-time access to data."
    },
    {
        name: 'CRM.jpg',
        description: "Our CRM software helps you manage customer relationships, track sales leads, automate workflows, and gain insights through powerful analytics. From lead generation to post-sale support, it centralizes all interactions to boost productivity and drive business growth."
    },
    {
        name: 'GYM.jpg',
        description: "Our Gym Management Software simplifies member tracking, class scheduling, payments, and performance analytics — all in one platform. Whether you're running a fitness studio or a large gym, it helps streamline operations and enhance member engagement."
    },
    {
        name: 'LAW.jpg',
        description: "Our Law Practice Management Software is designed for legal professionals to manage cases, client records, documents, appointments, and billing efficiently. It ensures compliance, improves workflow, and helps law firms deliver better legal services with less administrative burden."
    },
    {
        name: 'Property.jpg',
        description: "Our Property Management Software simplifies real estate operations by handling tenant records, rent collection, maintenance requests, lease agreements, and financial reporting—all in one place. It's ideal for landlords, agents, and property managers seeking efficiency and control."
    },
    {
        name: 'Warehouse_Management.jpg',
        description: "Optimize your inventory and streamline logistics with our Warehouse Management Software. From real-time stock tracking and order fulfillment to automated alerts and reporting, it ensures accuracy, speed, and efficiency in every warehouse operation."
    }
];

export default function Services() {

    return (
        <main
            className="w-full
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
            overflow-hidden">
            <InView
                beforeClassName={'opacity-0 translate-x-[200px]'}
                afterClassName={'opacity-100 tansform-all tanslate-x-0 duration-700'}
                className={'w-full max-sm:mt-[15%]'}>
            <h1
                className="text-6xl max-sm:text-5xl w-full text-center font-black font-[Montserrat] pb-[5%] max-sm:pb-[2%]">
                Our Services</h1>
            </InView>
            {
                cardsArray.map((image, i) => (
                        <ServicesCard key={i} imageUrl={`/assets/${image.name}`} description={image.description} />
                ))
            }
        </main>
    )
}