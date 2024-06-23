'use client'
import { useState } from "react";

export default function Item({name, description, price, img, likes}) {

    const[desc, showDesc] = useState(false)
    const[contactInfo, showContactInfo] = useState(false)
    const[submitted, gotSubmit] = useState(false)
    // const[...likes, setLikes] = useState()

    const displayDesc = () => {
        console.log(description)
        showDesc(true)
    }

    const getContactInfo = () => {
        showContactInfo(true)
        console.log('interested is clicked!')
    }

    const addLikes = () => {
        setLikes(...likes)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target[0].value)
        console.log('')
        showContactInfo(false)
        gotSubmit(true)
    }

    const handleClick = () => {
        e.preventDefault()
        gotSubmit(true)
    }

    return (
        <div>
            <img src={img} alt={name} width={350} height={300}/>
            <div className="flex justify-center">
                <div className="text-center py-3 space-y-2">
                    <p className="font-semibold">{name}</p>
                    { showDesc ?
                        <div>
                            <p>{description} - ${price}</p>
                        </div>

                    : <button onClick={displayDesc} className="bg-sky-100 rounded-full p-0.8">tell me more...</button>}
                </div>
            </div>
            <div className="flex justify-center text-center">
                { contactInfo  ? 
                    <div className="flex">
                        <form onSubmit={handleSubmit}>
                            <label>leave your name:</label>
                            <input type="text" className="text-center rounded-md block my-2 max-w-23 bg-violet-200"/>
                            <button type="submit">submit</button>
                        </form>
                    </div>
                : 
                <button onClick={getContactInfo} className="bg-violet-100 rounded-full p-0.8">
                    { !submitted ?
                        <p>interested!</p>
                        : <p>thanks!</p>
                    }
                </button>}    
            </div>
        </div>

    )
}