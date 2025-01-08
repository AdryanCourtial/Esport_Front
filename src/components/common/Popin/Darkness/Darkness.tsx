import './Darkness.css'

interface Props {
    setTogglePopin: any
    children: any
}

const Darkness: React.FC<Props> = ({ setTogglePopin, children }) => {

    const TogglePopin = () => {
        setTogglePopin((previewValue: boolean ) => !previewValue)
    }

    return(
        <div className='darkness'
        onClick={TogglePopin}
        >
            { children }
        </div>
    )
}

export default Darkness