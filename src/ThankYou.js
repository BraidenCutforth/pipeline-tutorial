import React from 'react'

export default function ThankYou({disabled}) {

    if(disabled) return <div />
    return <div>
            <h1> Enjoy Vikehacks 2020!</h1>
            <p> Thank you for following along in this workshop. If you have any questions at all, shoot me a message on slack and I will be happy to help!</p>
            <p>Happy Hacking!</p>
        </div>
}
