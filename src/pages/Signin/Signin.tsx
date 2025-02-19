import React from 'react'
import './Signin.css'
import DiscordButtonForm from '../../components/common/DiscordButtonForm/DIscordButtonForm'
import MainLayout from '../../layouts/MainLayout/MainLayout'

const Signin: React.FC = () => {
    return (
        <MainLayout>
            <div className='p-[30px]'>
                <h1 className='text-4xl m-auto text-center'> Connexion Via discord ! </h1>
                <div className='flex flex-row justify-center items-center h-[100vh]'>
                    <DiscordButtonForm />
                </div>
            </div>
        </MainLayout>
    )
}

export default Signin