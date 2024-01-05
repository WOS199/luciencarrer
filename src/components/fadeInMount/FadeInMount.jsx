import { useEffect, useState } from "react"

function FadeInMount ({isOpen, children}) {
    const [showChildren, setShowChildren] = useState(isOpen)
    const [isMounting, setIsMounting] = useState(isOpen)
    

    useEffect(() => {
        if(isOpen) {
            setTimeout(() => {
                setIsMounting(true)
                setShowChildren(true)
            }, 400)
        } else {
            setIsMounting(false)
            setTimeout(() => {
                setShowChildren(false)
            }, 300)
        }
    }, [isOpen])

    let classNames = `${isMounting ? 'animate-FadeIn' : 'animate-FadeOut'}`

    return (
        <div className={classNames}>{showChildren && children}</div>
    )
}

export default FadeInMount