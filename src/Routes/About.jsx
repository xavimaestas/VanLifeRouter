import aboutImg from '../assets/about-img.png'
import {Link} from 'react-router-dom'


export default function About(){
    return (
        <div className="about-main">
            <img src={aboutImg} className="about-img"></img>
            <div className="about-content">
                <h1>Don't squeeze in a sedan when you could relax in a van.</h1>
                <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
                (Hitch costs extra 😉)
                <br/>
                Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.</p>

                <p></p>
            </div>
            <div className="about-explore">
                <div className="about-explore-content">
                    <h3>Your destination is waiting.<br/>
                    Your van is ready. 
                    </h3>
                    <Link to="" className="explore-link">Explore our Vans</Link>
                </div>
              
            </div>
       
        </div>
        
      
    )
  }