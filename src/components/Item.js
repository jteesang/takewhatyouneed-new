'use client'
import { useState } from "react";
import Contact from "@/components/Contact";

export default function Item({name, link, description, price, img, status, likes}) {
    // const item = useContext(ItemContext)
    const[desc, showDesc] = useState(false)
    const[contactInfo, showContactInfo] = useState(false)
    const[submitted, gotSubmit] = useState(false)
    // const[...likes, setLikes] = useState()

    const getStatusProps = async () => {

    }

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

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     console.log(e)
    //     console.log(e.target[0].value)
        
    //     showContactInfo(false)
    //     gotSubmit(true)
    // }

    const handleClick = () => {
        e.preventDefault()
        gotSubmit(true)
    }

    return (
        <div>
            {link}
            <img src={img} alt={name} width={350} height={300}/>
            <div className="flex justify-center">
                <div className="text-center py-3 space-y-2">
                    <p className="font-semibold">{name}</p>
                    { showDesc ?
                        <div className="space-y-2">
                            <p>{description}</p>
                            <p className="font-semibold">${price}</p>
                            
                            {
                                link !== null && link !== undefined ?
                                <p>[<a className="text-violet-500" href={link}>source</a>]</p>
                                : ""
                            }
                            
                        </div>

                    : <button onClick={displayDesc} className="bg-sky-100 rounded-full p-0.8">tell me more...</button>}
                </div>
            </div>
            <div className="flex justify-center text-center">
                { contactInfo  ? 
                    <div className="flex">
                        <Contact name={name}></Contact>
                    </div>
                : 
                    <button onClick={getContactInfo} className="bg-violet-100 rounded-full p-0.8">
                        { !submitted ?
                            <p>interested!</p>
                            : <p>thanks!</p>
                        }
                    </button>
                }   
                <p>{status}</p>    
            </div>
        </div>

    )
}