import { useEffect, useState } from "react"
import PropTypes from "prop-types";

function FadeInMount ({isOpen, isOpening, children}) {
    const [showChildren, setShowChildren] = useState(isOpen)
    const [isMounting, setIsMounting] = useState(isOpen)

    FadeInMount.propTypes = {
        isOpen: PropTypes.bool.isRequired,
        isOpening: PropTypes.bool.isRequired,
        children: PropTypes.node.isRequired,
    };
    

    useEffect(() => {
        if(isOpening) {
            setTimeout(() => {
                setIsMounting(true)
                setShowChildren(true)
            }, 400)
        } else {
            setIsMounting(false)
            setTimeout(() => {
                setShowChildren(false)
            }, 100)
        }
    }, [isOpening])

    let classNames = `${isMounting ? 'animate-FadeIn' : 'animate-FadeOut'}`

    return (
        <div className={classNames}>{showChildren && children}</div>
    )
}

export default FadeInMount