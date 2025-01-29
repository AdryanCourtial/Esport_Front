import './App.css'
import Home from './pages/Home/Home.tsx'
import { Routes, Route } from 'react-router-dom';
import Signin from './pages/Signin/Signin.tsx';
import Articles from './pages/Articles/Articles.tsx';
import Tournois from './pages/Tournois/Tournois.tsx';
import Signup from './pages/Signup/Signup.tsx';
import Profil from './pages/Profil/Profil.tsx';

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route 
          path='/'
          Component={Home}
        />

        <Route 
          path='/articles'
          Component={Articles}
        />
        
        <Route 
          path='/tournois'
          Component={Tournois}
        />

        <Route 
          path='/inscription'
          Component={Signup}
        />

        <Route 
          path='/profil'
          Component={Profil}
        />

        <Route 
          path='/connexion'
          Component={Signin}
        />
        
      </Routes>
    </>
  )
}

export default App
