import React from 'react'
import './Signin.css'
import MainLayout from '../../layouts/MainLayout/MainLayout'
const Signin: React.FC = () => {


    return (
        <MainLayout>
            <div className='p-[30px] h-[90vh]'>
                <div className='m-auto flex flex-col items-center h-full justify-center gap-4'>
                    <div>
                        <h1 className='text-4xl m-auto text-center'> Connexion via Discord ! </h1>
                    </div>
                    <div className='bg-white w-fit p-4 rounded-full'>
                        <a href={import.meta.env.VITE_BACKEND_URL + "/auth/discord"}>
                            <img className='w-[200px] image_discord' src="/Discord-Logo-Black.png" />
                        </a>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default Signin