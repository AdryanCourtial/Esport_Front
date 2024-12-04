import './App.css'
import Home from './pages/Home/Home.tsx'
import { Routes, Route } from 'react-router-dom';
import Signin from './pages/Signin/Signin.tsx';

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route 
          path='/'
          Component={Home}
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
