import './Navbar.css'

interface Props {
    content: string
    background: string
}

const Navbar: React.FC<Props> = ({ background, content } ) => {
    return (
        <div className="button_sidebar">
            { content }
        </div>
    )
}

export default Navbar