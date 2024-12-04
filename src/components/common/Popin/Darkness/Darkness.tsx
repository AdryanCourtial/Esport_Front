import './Darkness.css'

interface Props {
    setTogglePopin: any
}

const Darkness: React.FC<Props> = ({ setTogglePopin }) => {

    const TogglePopin = () => {
        setTogglePopin((previewValue: boolean ) => !previewValue)
    }

    return(
        <div className='darkness'
        onClick={TogglePopin}
        >

        </div>
    )
}

export default Darkness