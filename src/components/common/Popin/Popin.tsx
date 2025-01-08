import './Popin.css'
import Darkness from './Darkness/Darkness'
import  ReactDOM  from 'react-dom'

interface Props {
    children: any
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