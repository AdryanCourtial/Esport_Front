import './Skeleton.css'

interface Props {
    widht: string,
    height: string
}

const Skelton: React.FC<Props> = ({ height, widht}) => {
    return (
        <div className='skeleton' style={{
            width: widht,
            height: height
        }}>
            
        </div>
    )
}

export default Skelton