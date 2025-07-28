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
        max-sm:p-[5%]
        max-sm:pt-[2%]
        h-screen
        box-border">
            <h1
                className="w-full
            text-6xl
            text-center
            font-black
            font-serif
            pb-[5%]
            max-sm:pb-[2%]">
                Contact Us</h1>
            <fieldset>
                <legend>Please Fill this To Contact Us</legend>
                <form>
                    <label htmlFor="Name">
                        Name:
                    </label>
                    <input type="text"
                        name="Name"
                        id="Name"
                        value={userName}
                        placeholder="Enter Your Name Here!"
                        onChange={(e) => setUserName(e.target.value)}
                        required />

                        <label htmlFor="Email">
                            Email:
                        </label>
                        <input type="email"
                        name="Email"
                        id="Email"
                        value={userEmail}
                        placeholder="Enter Your Email Here!"
                        onChange={(e) => setUserEmail(e.target.value)}
                        required/>

                        <label htmlFor="Ph_No">
                            Phone Number:
                        </label>
                        <input type="tel"
                        name="Phone"
                        id="Ph_No"
                        value={userPhoneNumber}
                        placeholder="Enter Your Phone Number Here!"
                        onChange={(e) => setUserPhoneNumber(e.target.value)}
                        required
                        />

                        <label htmlFor="Question">
                            Question:
                        </label>
                        <input type="text"
                        name="Question"
                        id="Question"
                        value={userQuestion}
                        placeholder="Enter Your Question Here!"
                        onChange={(e) => setUserQuestion(e.target.value)}
                        required
                        />
                        <input type="submit" value="Submit"/>
                </form>
            </fieldset>
        </main>
    )
}