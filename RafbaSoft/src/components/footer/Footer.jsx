export default function Footer() {
    return (
        <footer
            className="w-full h-[120vh] bg-blue-950 flex flex-col justify-end">
            <div className="flex flex-row justify-between h-[20%] items-center">
                <div>
                    <h2 className="text-white">Need Any Help?</h2>
                    <h1 className="text-white">Contact us Anytime</h1>
                </div>
                <div>
                    <h2 className="text-white">Call us</h2>
                    <a href="" className="text-white">+92310-7488488</a>
                </div>
                <div>
                    <h2 className="text-white">Need Any Help?</h2>
                    <a href="" className="text-white">khusham7676@gmail.com</a>
                </div>
                <div>
                    <h2 className="text-white">Need Any Help?</h2>
                    <div>
                        <a href="" className="text-white">Twitter</a>
                        <a href="" className="text-white">Facebook</a>
                        <a href="" className="text-white">Instagram</a>
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-evenly h-[20%] items-center">
                <a href=""className="text-white">Terms and Conditions</a>
                <a href=""className="text-white">Private Policies</a>
            </div>
        </footer>
    )
}