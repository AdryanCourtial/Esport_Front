import { useParams } from "react-router-dom"
import MainLayout from "../../../layouts/MainLayout/MainLayout"

const TournamentInscription: React.FC = () => {

    const { uuid } = useParams()
    return (
        <MainLayout>
            <div>
                Je suis la Page d'inscription pour l'uuid : {uuid}
            </div>
        </MainLayout>
    )
}

export default TournamentInscription