import Navbar from "./Navbar"
import CarrousselBanner from "./CarrousselBanner"

function Banner()
{
  
    return <section className="banner">

           
            <div  className="banner__title">
              <h2>
              Les plus populaires 
              </h2>
             
            </div>
           <div className="banner__carroussel__container">
           <CarrousselBanner/>
           </div>
           
         
           </section>
}

export default Banner;
