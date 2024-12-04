import './MainLayout.css'
import Footer from '../../components/common/Footer/Footer'
import Header from '../../components/common/Header/Header'

interface Props {
    children: React.ReactNode
}

const MainLayout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <Header />
            <main>
                { children }
            </main>
            <Footer />
        </>
    )
}

export default MainLayout