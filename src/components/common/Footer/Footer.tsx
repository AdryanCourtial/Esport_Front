import React from 'react'
import './Footer.css'
import InstagramIcon from '../../../../public/InstagramIcon'
import TwitchIcon from '../../../../public/TwitchIcon'
import TwitterIcon from '../../../../public/TwitterIcon'

const Footer: React.FC = () => {
    return (
        <div id='footer' className='bg-neutral flex flex-col gap-8 py-4'>
            <div className='flex flex-row justify-center items-center'>
                <img src="/logo-pole-e-sport.png" alt="" className='aspect-auto w-[90px]' />
            </div>
            <div className='flex flex-row justify-center items-center gap-8 cursor-pointer'>
                <InstagramIcon className='reseau-icon'stroke='#FFFFFF' />
                <TwitchIcon className='reseau-icon' stroke='#FFFFFF' />
                <TwitterIcon className='reseau-icon' stroke='#FFFFFF' />
            </div>
            <div className='link_info flex flex-row justify-center items-center gap-8'>
                <a href="#"> Règlements des tournois </a>
                <a href="#"> Conditions d’utilisation </a>
                <a href="#"> Politique de confidentialité </a>
            </div>
        </div>
    )
}

export default Footer