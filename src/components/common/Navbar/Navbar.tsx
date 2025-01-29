import ButtonNavbar from './ButtonNavbar/ButtonNavbar'
import { arrayContent } from './Navbar.type'

const Navbar: React.FC = () => {

    return (
        <div className='navbar bg-[#262626] h-auto w-screen md:h-screen md:w-[200px]'
        onClick={(e) => e.stopPropagation()}
        >
            <div className=''>
                {
                    arrayContent.map((value, index) => (
                        <ButtonNavbar 
                        key={index}
                        redirection={value.redirection}
                        variantStyle={value.variants}
                        >
                            {value.content}
                        </ButtonNavbar>
                    ))
                }
            </div>
        </div>
    )
}

export default Navbar