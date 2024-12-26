
import Dessert from '../Components/ManuPages/Dessert'
import Drink from '../Components/ManuPages/Drinks';
import Experience from '../Components/ManuPages/Experience';
import MainCours from '../Components/ManuPages/MainCourse';
import StarterMenu from '../Components/ManuPages/MenuHero';
import PartnersAndClients from '../Components/ManuPages/PartnerClient';
import Hero from '../Components/ManuPages/StartMenu';

export default function Menu() {
  return (
<div>
  <Hero/>
  <StarterMenu/>
  <MainCours/>
  <Experience/>
  <Dessert/>
  <Drink/>	
  <PartnersAndClients/>
</div>
  );
}