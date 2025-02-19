import "./ContentA.css"
import { Link } from 'react-scroll'

const ContentA: React.FC = () => {

    
    return (
        <div id='' className="w-full min-h-screen h-auto items-center flex flex-col justify-around relative z-40 mb-12">

            <video id="d" autoPlay muted loop className="absolute w-full h-full: z-10 opacity-10 mb-14">
                <source src="/SSBU_Trailer_no_date.mp4" type="video/mp4"/>
            </video>

            <div className="flex flex-col items-center z-40">
                <img src="/logo-pole-e-sport.png" alt="" className="aspect-auto w-[30%] max-w-[230px]"/>

                <h1 className="text-center text-2xl font-semibold">
                    Pôle E-sport - Association Étudiante
                </h1>
            </div>

            <Link
            to="footer"
            className="cursor-pointer z-30 "
            spy={true} 
            smooth={true} 
            offset={50} 
            duration={500} 
            >
                <div className="flex-col flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mouse"><rect x="5" y="2" width="14" height="20" rx="7"/><path d="M12 6v4"/></svg>
                    <div className="mouse-scroll">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="arrow-scroll"><path d="m6 9 6 6 6-6"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="arrow-scroll"><path d="m6 9 6 6 6-6"/></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="arrow-scroll"><path d="m6 9 6 6 6-6"/></svg>
                    </div>
                </div>
            </Link>
            
        </div>
    )
}

export default ContentA