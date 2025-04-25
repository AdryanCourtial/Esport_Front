import React from "react"
import "./ButtonHeader.css"
import { Link, useLocation } from "react-router-dom"

interface Props {
    children: React.ReactNode
    link: string
}

const ButtonHeader: React.FC<Props> = ( { children, link } ) => {

    const location = useLocation()

    const isOnUrk = () => {
        return location.pathname.includes(link)
    }

    return (
        <Link to={link}>
            <div className="container_button_header">
                <div className="button_header">
                    {children}
                </div>
                {isOnUrk() ? (
                    <hr />
                ) : null}
            </div>
        </Link>
    )
}

export default ButtonHeader