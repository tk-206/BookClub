import './Home.css'
import HomeHeader from './components/HomeHeader'
import HomePreview from './components/HomePreview'
import HomeFeatures from './components/HomeFeatures'
import HomeCommunity from './components/HomeCommunity'
import HomeAuthors from './components/HomeAuthors'
import HomeStart from './components/HomeStart'



export default function Home() {
    

    return (
        
        <section className='home-page'>
            /* header */
            <HomeHeader />

            /* feature */
            <HomeFeatures />

            /* preview */
            <HomePreview />

            /* community */
            <HomeCommunity />

            /* authors */
            <HomeAuthors />

            /* start */
            <HomeStart />  
        </section>
    )
}