import './Home.css'
import MainLayout from '../../layouts/MainLayout/MainLayout'
import ContentA from '../../components/common/Home/ContentA/ContentA'
import ContentB from '../../components/common/Home/ContentB/ContentB'

const Home: React.FC = () => {

    
    return (
        <div id='home_page' className='-z-20'>
            <MainLayout>
                <main>
                    <ContentA />
                    <ContentB />
                </main>
            </MainLayout>
        </div>
    )
}

export default Home