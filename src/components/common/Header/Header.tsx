import React, { useState } from 'react'
import './Header.css'
import Navbar from '../Navbar/Navbar'
import Darkness from '../Popin/Darkness/Darkness'
import ButtonHeader from './ButtonHeader/ButtonHeader'
import { arrayContent } from '../Navbar/Navbar.type'
import { useAtom } from 'jotai'
import { userInfoAtom } from '../../../atoms/userAtom'

const Header: React.FC = () => {

    const [togglePopin, setTogglePopin] = useState(false)

        const [userInfo, _] = useAtom(userInfoAtom)
    

    return (
        <header>
            <div className='item_header'>
                <img src="/logo-pole-e-sport.png" alt="logo-pole-esport" />
            </div>
            {/* Display if screen width > 768px */}
            <div className='container_link flex-1 h-full'>

                {arrayContent.map((value, index) => (
                    
                    <ButtonHeader link={value.redirection} key={index}> {value.content} </ButtonHeader>

                ))}

                {
                    !userInfo ? (

                        <ButtonHeader
                        link='/login'
                        >
                            Connexion
                        </ButtonHeader>
                    ) : 
                    
                    <ButtonHeader
                    link='/profil'
                    >
                    Mon Compte
                    </ButtonHeader>
                }
            </div>

            {/* Display if screen width < 768px */}
            <div className='item_header'>
                <div className='menu_hamberger cursor-pointer'>
                    <svg 
                    onClick={() => setTogglePopin(true)}
                    viewBox="0 0 24 24" fill="red" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                    <linearGradient
                        id="gradient-stroke"
                        x1="3.16667"
                        y1="-2.17693"
                        x2="44.3541"
                        y2="2.89822"
                        gradientUnits="userSpaceOnUse"
                    >
                  <stop stopColor="#A21CAF" />
                  <stop offset="1" stopColor="#E879F9" />
                </linearGradient>
              </defs>
              <path d="M4 18L20 18" stroke="url(#gradient-stroke)" strokeWidth="2" strokeLinecap="round"/><path d="M4 12L20 12" stroke="url(#gradient-stroke)" strokeWidth="2" strokeLinecap="round"/><path d="M4 6L20 6" stroke="url(#gradient-stroke)" strokeWidth="2" strokeLinecap="round"/></svg>
                </div>
            </div>
            { togglePopin ? 
                 <Darkness
                 setTogglePopin={setTogglePopin}
                 >
                    <Navbar></Navbar>
                 </Darkness> 
 
                 : null }
        </header>
    )
}

export default Header