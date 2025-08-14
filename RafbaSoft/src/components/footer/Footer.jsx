export default function Footer() {
    return (
        <footer
            className="w-full h-[100vh] bg-blue-950 flex flex-col justify-end box-border">
                <h1
                className="h-[80%]
                max-md:h-[50%]
                text-center
                text-white
                w-[40%]
                text-5xl
                max-md:text-3xl
                mt-[10%]
                m-[5%]
                box-border
                font-[Montserrat]
                font-black">
                    Let Magic Together!
                </h1>
            <div className="w-full flex flex-row justify-evenly h-[20%] max-md:h-[50%] items-center max-md:flex-col">
                <div>
                    <h2 className="text-white text-center font-[Montserrat] font-bold">Need Any Help?</h2>
                    <h1 className="text-white text-center font-[Montserrat] font-black">Contact us Anytime</h1>
                </div>
                <div>
                    <h2 className="text-white text-center font-[Montserrat] font-semibold">Call us</h2>
                    <a href="https://wa.me/923210700018?text=Hello" target="_blank"
                        className="text-white text-center">
                        Whatsapp</a>
                </div>
                <div>
                    <h2 className="text-white text-center font-[Montserrat] font-semibold">Email us</h2>
                    <a href="mailto:rafbasoft@gmail.com" target="_blank"
                        className="text-white
                        text-center
                        ">Mail to: Rafba-Soft</a>
                </div>
                <div
                    className="w-[30%] max-sm:h-[30%]">
                    <h2 className="text-white text-center font-[Montserrat] font-semibold p-[2%]">Our Socials</h2>
                    <div
                        className="flex flex-row max-sm:flex-col justify-evenly items-center max-sm:h-[100%]">
                        <a href="https://www.linkedin.com/company/106834558/admin/dashboard/" className="text-white"
                            target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" width="40" height="40" fill="#0077B5"
                                className="w-6 h-6">
                                <path d="M100.28 448H7.4V149.1h92.88zm-46.44-340.6C24.45 107.4 0 82.3 0 51.2 0 23 23.56 0 52.79 0s52.79 23 52.79 51.2c0 31.1-24.44 56.2-51.74 56.2zM447.9 448h-92.4V302.4c0-34.7-.7-79.4-48.38-79.4-48.4 0-55.8 37.8-55.8 76.9V448h-92.4V149.1h88.7v40.8h1.3c12.3-23.3 42.5-48.4 87.5-48.4 93.6 0 110.8 61.6 110.8 141.6V448z" />
                            </svg>

                        </a>


                        <a href="https://www.facebook.com/profile.php?id=61573870153011" className="text-white"
                            target="_blank"><svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                className="w-6 h-6 text-blue-600"
                            >
                                <path
                                    d="M22.675 0h-21.35C.594 0 0 .593 0 1.326v21.348C0 23.407.594 24 1.326 
       24H12.82v-9.294H9.692V11.03h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 
       1.325 0 2.466.099 2.797.143v3.24h-1.918c-1.504 
       0-1.796.715-1.796 1.763v2.312h3.587l-.467 
       3.676h-3.12V24h6.116C23.407 
       24 24 23.407 24 22.674V1.326C24 
       .593 23.407 0 22.675 0z"
                                />
                            </svg>
                        </a>

                        <a href="https://www.instagram.com/rafbasoft?igsh=MTZjYWh2eHNzMnI4YQ==" className="text-white"
                            target="_blank"><svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                fill="currentColor"
                                className="w-6 h-6 text-pink-500"
                            >
                                <path
                                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 
    114.9s51.3 114.9 114.9 114.9 114.9-51.3 
    114.9-114.9S287.6 141 224.1 
    141zm0 186.6c-39.6 0-71.7-32.1-71.7-71.7 
    0-39.6 32.1-71.7 71.7-71.7s71.7 32.1 
    71.7 71.7c0 39.6-32.1 71.7-71.7 
    71.7zm146.4-194.3c0 14.9-12 26.9-26.9 
    26.9s-26.9-12-26.9-26.9 12-26.9 
    26.9-26.9 26.9 12 26.9 26.9zm76.1 
    27.2c-1.7-35.7-9.9-67.3-36.2-93.5S379.4 
    7.7 343.7 6C307.6 4.1 140.4 4.1 
    104.3 6 68.6 7.7 37 15.9 
    10.8 42.1S-1.7 104.3.1 
    140.4c1.9 36.1 1.9 203.3 
    0 239.4-1.7 35.7 6.4 67.3 
    32.7 93.5s57.8 35.2 93.5 
    36.2c36.1 1.9 203.3 1.9 
    239.4 0 35.7-1.7 67.3-9.9 
    93.5-36.2s35.2-57.8 36.2-93.5c1.9-36.1 
    1.9-203.2 0-239.3zM398.8 
    388c-7.8 19.6-22.9 34.7-42.6 
    42.6-29.5 11.7-99.5 9-132.1 
    9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 
    9-132.1c7.8-19.6 22.9-34.7 42.6-42.6C120.6 
    60.5 190.6 63.1 223.2 63.1s102.7-2.6 
    132.1 9c19.6 7.8 34.7 22.9 42.6 
    42.6 11.7 29.5 9 99.5 9 132.1s2.7 
    102.7-8.9 132.2z"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-row justify-evenly h-[20%] items-center">
                <a href="" className="text-white">Terms and Conditions</a>
                <a href="" className="text-white">Private Policies</a>
            </div>
        </footer>
    )
}