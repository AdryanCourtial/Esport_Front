import ButtonNavbar from './ButtonNavbar/ButtonNavbar'
import { arrayContent } from './Navbar.type'
import { motion } from 'motion/react';
import "./Navbar.css"
import { useAtom } from 'jotai';
import { userInfoAtom } from '../../../atoms/userAtom';

const Navbar: React.FC = () => {

    const menuVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2, // Décalage de chaque enfant (0.2s ici)
          },
        },
      };
    
    const [userInfo, _] = useAtom(userInfoAtom)
    
    return (
        <div className='navbar bg-[#262626] h-auto w-screen'
        onClick={(e) => e.stopPropagation()}
        
        >
            <motion.div className='w-full'
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            >
                {
                    arrayContent.map((value, index) => (
                        <ButtonNavbar
                        index={0.01}
                        key={index}
                        
                        redirection={value.redirection}
                        variantStyle={value.variants}
                        >
                            {value.content}
                        </ButtonNavbar>
                    ))
                    
                }
                {
                    !userInfo ? (
                        <ButtonNavbar
                        index={0.01}
                        redirection={"/login"}
                        variantStyle={"primary"}
                        >
                            {"Connexion"}
                        </ButtonNavbar>
                    ) : 
                    
                    <ButtonNavbar
                    index={0.01}
                    redirection={"/profil"}
                    variantStyle={"primary"}
                    >
                        {"Votre Compte"}
                    </ButtonNavbar>
                }
            </motion.div>
        </div>
    )
}

export default Navbar