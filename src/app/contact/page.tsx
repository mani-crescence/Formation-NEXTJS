'use client'

import { useRouter } from "next/navigation"


export default function Contact(){

    const router = useRouter()

    const handleSendContactForm = () => {
        console.log('formulaire de conctact envoyé')
        router.push('/')
    }

    return (
        <>
            <h1>Contact</h1>
            <button onClick={handleSendContactForm}>Valider le formulaire </button>
        </>
    )
}