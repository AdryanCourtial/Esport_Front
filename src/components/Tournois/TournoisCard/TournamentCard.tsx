import React from "react"
import CalendarCross from "../../../assets/CalendarCross"
import CalendarCheck from "../../../assets/CalendarCheck"
import { Link } from "react-router-dom"
import "./TournamentCard.css"
import { Tournament } from "../../../interfaces/tounrnament"
import useFormatDate from "../../../hooks/useFormatDate"


interface Props {
    data: Tournament,
}

const TournamentCard: React.FC<Props> = ({ data }) => {

    const options: Intl.DateTimeFormatOptions = { day: "2-digit", month: "2-digit", year: "2-digit"}

    const { FormatDate } = useFormatDate()

    return (
        <Link 
        to={'/tournament/' + data.id}>
            <div className="container-card">
                <div className="w-full max-h-[170px]">
                    <img className="object-cover w-full h-full" src={data.game.image_url}></img>
                </div>
                <div className="p-2 flex flex-col gap-[5px]">
                    <div className="text-center">
                        {data.name}
                    </div>
                    <div className="container-date">
                        <CalendarCheck stroke="var(--color-primary)" width={24} />
                        <p> {'Début Inscription : ' + FormatDate(data.registrationStart, options) }</p>
                    </div>
                    <div className="container-date">
                        <CalendarCross stroke="var(--color-primary)" width={24} />
                        <p> {'Fin Inscription : ' + FormatDate(data.registrationEnd, options)}</p>
                    </div>
                </div>
                
            </div>  
        </Link>
    )
}

export default TournamentCard