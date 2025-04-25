import React, { useEffect, useState } from 'react'
import MainLayout from '../../layouts/MainLayout/MainLayout'
import TournamentCard from '../../components/Tournois/TournoisCard/TournamentCard'
import { FetchTournament } from '../../api/tounament'
import { Tournament as TournamentInterface } from '../../interfaces/tounrnament'
import { generateArray } from '../../utils/utils'
import Skelton from '../../components/common/Skeleton/Skeleton'

const Tournament: React.FC = () => {

    const [arrayTournament, setArrayTournament] = useState<TournamentInterface[]>([])

    useEffect(() => {
        FetchTournament.getAllTournament().then((value) => {
            setArrayTournament(value)
        })
    }, [])

    return (
        <MainLayout>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-[20px] m-auto w-[90%] py-[50px]'>
                {arrayTournament.length > 0 ? (
                    arrayTournament.map((item) => (
                        <TournamentCard
                        key={item.id}
                        data={item}
                        >
                        </TournamentCard>
                    ))
                ) : generateArray(9).map((index) => (
                    <Skelton key={index} height='300px' widht='300px'/>
                ))
                }
            </div>
        </MainLayout>
    )
}

export default Tournament