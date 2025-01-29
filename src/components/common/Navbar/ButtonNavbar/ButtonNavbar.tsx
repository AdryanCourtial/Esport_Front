import { CSSProperties } from "react"
import { NavLink } from "react-router-dom"
import { motion } from "motion/react"
import './ButtonNavbar.css'

interface Props {
    children: string
    variantStyle: 'black' | 'primary'
    redirection: string
}

const ButtonNavbar: React.FC<Props> = ({ variantStyle, children, redirection } ) => {

    const chooseVariant = () => {

        let variantsObject: CSSProperties

        switch (variantStyle) {
            case 'primary':
                variantsObject = {
                    background: 'hsl(295, 72%, 40%)'
                }
                break
            case 'black':
                variantsObject = {
                    backgroundColor: '#262626'
                } 
                break
        }
        return variantsObject
    }

    return (
        <motion.div className="button_sidebar material-bubble font-semibold flex flex-row justify-center items-center h-[50px] cursor-pointer"
        whileHover={{filter: 'brightness(80%)'}}
        style={chooseVariant()}
        >
            <NavLink
            to={redirection}
            className='w-full h-full justify-center flex items-center'
            >
                <span>
                    { children }
                </span>
            </NavLink>
        </motion.div>
    )
}

export default ButtonNavbar