import './App.css'
import Home from './pages/Home/Home.tsx'
import { Routes, Route, useLocation } from 'react-router-dom';
import Signin from './pages/Signin/Signin.tsx';
import Articles from './pages/Articles/Articles.tsx';
import Tournois from './pages/Tournois/Tournament.tsx';
import Profil from './pages/Profil/Profil.tsx';
import TournamentInscription from './pages/Tournois/TournamentInscription/TournoisInscription.tsx';
import TournamentDescription from './pages/Tournois/TournamentDescription/TournamentDescription.tsx';
import { useEffect } from 'react';
import { FetchAuthentification } from './api/authentification.ts';
import CompletedProfil from './pages/Completed-Profil/CompletedProfil.tsx';
import { useAtom } from 'jotai';
import { userInfoAtom } from './atoms/userAtom.ts';

const App: React.FC = () => {

  const navigation = useLocation()

  const [_, setUseUserInfoAtom] = useAtom(userInfoAtom)

  useEffect(() => {
    FetchAuthentification.getInformationUser().then((value) => {
      setUseUserInfoAtom(value)
    }).catch(() => {
      setUseUserInfoAtom(undefined)
    })
  }, [navigation])
  
  return (
    <>
      <Routes>
        <Route 
          path='/home'
          Component={Home}
        />

        <Route 
          path='/articles'
          Component={Articles}
        />
        
        <Route 
          path='/tournament'
          Component={Tournois}
        />

        <Route 
          path='/tournament/:uuid'
          Component={TournamentDescription}
        />

        <Route 
          path='/tournament/:uuid/inscription'
          Component={TournamentInscription}
        />

        <Route 
          path='/profil'
          Component={Profil}
        />

        <Route 
          path='/login'
          Component={Signin}
        />

        <Route 
          path='/completed-profil'
          Component={CompletedProfil}
        />
        
      </Routes>
    </>
  )
}

export default App
