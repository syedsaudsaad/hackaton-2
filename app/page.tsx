import React from 'react'

import HomeHero from './Components/HomePages/HomeHero'
import OurChefs from './Components/HomePages/OurChefs'
import HomePage from './Components/HomePages/ChefGrid'
import FoodCategory from './Components/HomePages/FoodCategrey' 
//import ChefsHero from './Components/HomePages/ChefsHero'
//import ChefGrid from './Components/HomePages/ChefGrid'
import Heading from './Components/Heading'
import AboutHero from './Components/AboutPages/AboutHero'
import BlogHero from './Components/BlogPages/BlogHero'
import ContactHero from './Components/ContactPages/ContactHero'
import FAQHero from './Components/FAQPages/FAQHero'
import  Manu from './Components/ManuPages/Dessert'
import Manu1 from './Components/ManuPages/Drinks'
import Manu2 from './Components/ManuPages/Experience'
import Manu3 from './Components/ManuPages/MainCourse'
import Manu4 from  './Components/ManuPages/MenuHero'
import Manu5 from './Components/ManuPages/PartnerClient'
import Manu6 from './Components/ManuPages/StartMenu'
import SignInPage from './LogIn/page'
import Shop from './Shop/page'
import FAQPage from './FAQ/page'
import CheckOut from './CheckOut/page'
import Blog from './Blog/page'
import About from './About/page'
import Contact from './contact/page'
import Error404 from './404Error/page'
import Pages from './pages/page'

const Home = () => {
  return (
    <div>
      
      <HomeHero /> 
      <HomePage />
      <OurChefs />  
    <FoodCategory/>
     {/*<ChefGrid /> 
     <ChefsHero />   */}
     <Heading  text={" "}/>
     <AboutHero />
     <BlogHero />
     <ContactHero />
      <FAQHero />
      <Manu />
      <Manu1 />
      <Manu2 />
      <Manu3 />
      <Manu4 />
      <Manu5 />
      <Manu6 />
      <SignInPage />
      <Shop />
      <FAQPage />
      <CheckOut />
      <Blog />
      <About />
      <Contact />
      <Error404 /> 
      <Pages />
     
    </div>
  )
};
export default Home;
