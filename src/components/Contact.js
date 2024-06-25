'use client'
import { useState } from "react";
import { logInterest } from "@/lib/logInterest";

export default function Contact({name}) {
    const[submitted, gotSubmit] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        const value = e.target[0].value
        console.log(value)
        console.log(name)

        gotSubmit(true)
        const response = await logInterest(name, value)
        console.log(response)
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {
                    submitted ?
                    <button className="bg-violet-100 rounded-full p-0.8">thanks!!</button>
                    : 
                    <div>
                        <label>leave your name:</label>
                        <input type="text" className="text-center rounded-md block my-2 max-w-23 bg-violet-200"/>
                        <button type="submit">submit</button>  
                    </div>
                }
                    
            </form>
        </div>
    )
}
