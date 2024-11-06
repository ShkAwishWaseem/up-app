import React , {useState , useEffect} from 'react'
import Hero from './Hero'
import Header from './Header'
import Globe from './Globe'
import FAQS from './FAQS'
import Payment from './Payment'
import Choose from './Choose'
import Footer from './Footer'
import OfferedPrograms from './OfferedPrograms'
import Progress from './Progess'
import ScrollToTopButton from './STT'
import Connect from './Connect'
import Cookies from './Cookies'
import NoSSR from "react-no-ssr"
import LoadingBar from 'react-top-loading-bar'
// import Cards from './Cards'
// import Accordion from './Accordion'

const HomePage = () => {
  const [progress, setProgress] = useState(0);
useEffect(() => {
  setProgress(progress + 10);
  setTimeout(() => {
      setProgress(progress + 20);
  }, 800) 
  setTimeout(() => {
      setProgress(100);
  }, 1000) 
}, [])
  return (
    <div > 
       <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <NoSSR>
      <Cookies/>
      <Progress/>
      <Header/>
     <Hero/> 
<Globe/>
{/* <Cards/> */}
<Choose/>
<OfferedPrograms/>
<FAQS/>
<Payment/>
<Connect/>
<ScrollToTopButton/>
<Footer/>
</NoSSR>
    </div>
  )
}

export default HomePage
