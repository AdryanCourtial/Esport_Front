import React, { useState } from "react"
import DiscordIcon from "../../../assets/DiscordIcon"

interface Props {
    children: string
    action: () => void
    style?: React.CSSProperties
}

const CtaHoverIcon: React.FC<Props> = ({ action, children, style}) => {

    const [isHover, setIsHover] = useState(false)

    return (
        <div>
            <button style={{...style}} 
            className="button_cta" 
            onClick={action}
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}>
                {
                    isHover ? (
                        <DiscordIcon width={24} />
                    ) :
                    children
                }
            </button>
        </div>
    )
}

export default CtaHoverIcon