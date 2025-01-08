import './Navbar.css'

const Navbar: React.FC = () => {
    return (
        <div className='navbar'
        onClick={(e) => e.stopPropagation()}
        >
            <div> SAlut</div>
        </div>
    )
}

export default Navbar