import ButtonNavbar from './ButtonNavbar/ButtonNavbar'
import { arrayContent } from './Navbar.type'
import { motion } from 'motion/react';

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
    
    return (
        <div className='navbar bg-[#262626] h-auto w-screen md:h-screen md:w-[200px]'
        onClick={(e) => e.stopPropagation()}
        
        >
            <motion.div className=''
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
            </motion.div>
        </div>
    )
}

export default Navbar