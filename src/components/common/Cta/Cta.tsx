import React from "react"
import "./Cta.css"

interface Props {
    children: string
    action: () => void
    style?: React.CSSProperties
}

const Cta: React.FC<Props> = ({ children, action, style }) => {
    return (
     <button style={{...style}} className="button_cta" onClick={action}>
        {children}
     </button>
    )
}

export default Cta