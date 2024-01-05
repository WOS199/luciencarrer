import { useEffect, useState } from "react"

function Menu () {

    const [onMount, setOnMount] = useState('translate-y-full');

    useEffect(() => {
        setTimeout(() => {
            setOnMount('translate-y-0')
        }, 100)
    });

    return (
        <div>
            <div className="overflow-hidden">
            <p className={`font-bold text-4xl text-dark-linen mt-4 cursor-pointer transition-all duration-500 ${onMount}`}>About me</p>
            </div>
            <div className="overflow-hidden">
            <p className={`font-bold text-4xl text-dark-linen mt-4 cursor-pointer transition-all duration-500 delay-100 ${onMount}`}>Works</p>
            </div>
            <div className="overflow-hidden">
            <p className={`font-bold text-4xl text-dark-linen mt-4 cursor-pointer transition-all duration-500 delay-200 ${onMount}`}>Contact</p>
            </div>
            
        </div>
    )
}

export default Menu