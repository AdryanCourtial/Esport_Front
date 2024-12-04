import './Popin.css'
import Darkness from './Darkness/Darkness'
import { Portal } from 'react-portal';

interface Props {
    children: any
    setTogglePopin: any
}

const Popin: React.FC<Props> = ({ children, setTogglePopin }) => {

    return (
        <Portal>
            <div className='Popin'>
                <div>
                    <Darkness 
                    setTogglePopin={setTogglePopin}
                    />
                </div>
                <>
                    { children }
                </>
            </div>
        </Portal>
    )
}

export default Popin