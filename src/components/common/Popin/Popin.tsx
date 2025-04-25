import './Popin.css'
import Darkness from './Darkness/Darkness'
import  ReactDOM  from 'react-dom'
import { ReactElement } from 'react'

interface Props {
    children: ReactElement
    setTogglePopin: any
}

const Popin: React.FC<Props> = ({ children, setTogglePopin }) => {

    return ReactDOM.createPortal(
            <div className='Popin'>
                <Darkness 
                setTogglePopin={setTogglePopin}
                >
                    { children }
                </Darkness>
            </div>,
        document.body
    )
}

export default Popin