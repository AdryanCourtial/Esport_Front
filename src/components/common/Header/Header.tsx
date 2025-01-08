import React, { useState } from 'react'
import './Header.css'
import Popin from '../Popin/Popin'
import Navbar from '../Navbar/Navbar'
import Darkness from '../Popin/Darkness/Darkness'

const Header: React.FC = () => {

    const [togglePopin, setTogglePopin] = useState(false)

    return (
        <header>
            <div className='item_header' >
                <img src="/logo-pole-e-sport.png" alt="logo-pole-esport" />
            </div>
            <div className='item_header' >
                <div className='menu_hamberger'>
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
                  <stop stop-color="#A21CAF" />
                  <stop offset="1" stop-color="#E879F9" />
                </linearGradient>
              </defs>
              <path d="M4 18L20 18" stroke="url(#gradient-stroke)" stroke-width="2" stroke-linecap="round"/><path d="M4 12L20 12" stroke="url(#gradient-stroke)" stroke-width="2" stroke-linecap="round"/><path d="M4 6L20 6" stroke="url(#gradient-stroke)" stroke-width="2" stroke-linecap="round"/></svg>
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