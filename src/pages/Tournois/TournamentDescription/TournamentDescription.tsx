import { useNavigate, useParams } from "react-router-dom";
import MainLayout from "../../../layouts/MainLayout/MainLayout"
import { useEffect, useState } from "react";
import CalendarCheck from "../../../assets/CalendarCheck";
import CalendarCross from "../../../assets/CalendarCross";
import "./TournamentDescription.css"
import Cta from "../../../components/common/Cta/Cta";
import { Tournament } from "../../../interfaces/tounrnament";
import { FetchTournament } from "../../../api/tounament";
import useFormatDate from "../../../hooks/useFormatDate";

const TournamentDescription: React.FC = () => {

    const { uuid } = useParams();

    const navigate = useNavigate()
    const { FormatDate } = useFormatDate()

    const options: Intl.DateTimeFormatOptions = { day: "2-digit", month: "2-digit", year: "2-digit"}

    const [tournament, setTournament] = useState<Tournament>()

    useEffect(() => {

        if (!uuid) {
            navigate("/home")
            return
        } // Rediriger vers une page 404

        FetchTournament.getOneTournament(uuid).then((value) =>{
            setTournament(value)
        })
    }, [])

    return (
        <MainLayout>
            <div className="w-full bg-black min-h-screen flex flex-col items-center gap-[50px] py-[50px]">
                <h1 className="text-center"> {tournament?.name} </h1>  
                <div className="max-w-[790px]">
                    <img src={tournament?.game.image_url} alt="" />
                </div> 
                <div className="w-[80%] max-w-[800px] flex flex-col gap-[50px]">
                    <div>
                        <h2> Description :</h2>
                        <p>
                            { tournament?.description }
                        </p>
                    </div>
                    <div>
                        <h2> Conditions de participations </h2>
                        <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam dignissimos eveniet repudiandae quas magnam ipsam, culpa delectus, mollitia vel reprehenderit dolorum possimus nesciunt tempora doloremque, at voluptates unde necessitatibus laboriosam!</p>
                        <div className="mt-[10px]">
                            <div className="container-date-participation">
                                <CalendarCheck stroke="var(--color-primary)" width={24} />
                                <p>
                                    Date d'inscription : <span className="font-bold text-white"> { FormatDate(tournament?.registrationStart || "", options)}</span>
                                </p>
                            </div>
                            <div className="container-date-participation">
                                <CalendarCross stroke="var(--color-primary)" width={24} />
                                <p>
                                    Date de fin d'inscription : <span className="font-bold"> { FormatDate(tournament?.registrationEnd || "", options) }</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <Cta style={{
                        borderColor: "var(--color-primary)",
                        width: '200px'
                    }} 
                    action={() => navigate(`/tournament/${uuid}/inscription`)}> Inscription ici ! </Cta>
                </div>
            </div>
        </MainLayout>
    )
}

export default TournamentDescription