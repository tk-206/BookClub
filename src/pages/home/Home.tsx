import './Home.css'
import HomeHeader from './components/HomeHeader'
import HomePreview from './components/HomePreview'
import HomeFeatures from './components/HomeFeatures'
import HomeCommunity from './components/HomeCommunity'
import HomeAuthors from './components/HomeAuthors'
import HomeStart from './components/HomeStart'
import SEO from '../../components/SEO'



export default function Home() {
    

    return (
        
        <section className='home-page'>
            <SEO title="BookClub - 홈" />
            <HomeHeader />

            <HomeFeatures />

            <HomePreview />

            <HomeCommunity />

            <HomeAuthors />

            <HomeStart />  
        </section>
    )
}