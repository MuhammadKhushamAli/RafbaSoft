import { useState } from "react"

export default function ContactUs() {
    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPhoneNumber, setUserPhoneNumber] = useState('');
    const [userQuestion, setUserQuestion] = useState('');

    return (
        <main
            className="w-screen
        p-[10%]
        pt-[5%]
        max-sm:p-[2%]
        h-screen
        box-border
        flex
        flex-row
        max-sm:flex-col
        justify-center
        max-sm:justify-evenly
        items-center">
            <h1
                className="w-full
            text-6xl
            max-sm:text-5xl
            text-center
            font-black
            font-serif
            pb-[5%]
            max-sm:pb-[5%]">
                Contact Us</h1>
            <fieldset
            className="w-[50%]
            max-sm:w-[90%]
            border
            rounded-2xl
            p-2
            shadow-2xl">
                <legend>Please Fill this To Contact Us</legend>
                <form
                className="w-full
                h-full
                flex
                flex-col
                justify-between
                items-center
                gap-2">
                    <label htmlFor="Name">
                        Name:
                    </label>
                    <input type="text"
                        name="Name"
                        id="Name"
                        value={userName}
                        placeholder="Name Here!"
                        onChange={(e) => setUserName(e.target.value)}
                        required
                        className="border
                        rounded-2xl
                        p-1.5"/>

                        <label htmlFor="Email">
                            Email:
                        </label>
                        <input type="email"
                        name="Email"
                        id="Email"
                        value={userEmail}
                        placeholder="Email Here!"
                        onChange={(e) => setUserEmail(e.target.value)}
                        required
                        className="border
                        rounded-2xl
                        p-1.5"/>

                        <label htmlFor="Ph_No">
                            Phone Number:
                        </label>
                        <input type="tel"
                        name="Phone"
                        id="Ph_No"
                        value={userPhoneNumber}
                        placeholder="Phone Number Here!"
                        onChange={(e) => setUserPhoneNumber(e.target.value)}
                        required
                        className="border
                        rounded-2xl
                        p-1.5"/>

                        <label htmlFor="Question">
                            Question:
                        </label>
                        <input type="text"
                        name="Question"
                        id="Question"
                        value={userQuestion}
                        placeholder="Question Here!"
                        onChange={(e) => setUserQuestion(e.target.value)}
                        required
                        className="border
                        rounded-2xl
                        p-1.5"/>
                        <input type="submit" value="Submit"
                        className="bg-blue-900
                        hover:bg-blue-700
                        text-white
                        padding
                        w-[50%]
                        p-2.5
                        rounded-2xl"/>
                </form>
            </fieldset>
        </main>
    )
}