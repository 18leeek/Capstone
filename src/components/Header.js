import React from 'react'; 
import { Link } from 'react-router-dom';
import bannerImg from '../images/restauranfood.jpg';

const Header  = () => {
    return (
        <header className= 'header'>
            <section>
                {/*Banner texts */}
                <div className= 'banner'>
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>Family Owned Mediterraneran Restaurant</p>
                    <Link to="/booking"><button aria-label='On Click'>Book a Table</button></Link>
                </div>

                {/* Banner image */}
                <div className="banner-img">
                    <img src={bannerImg} alt="Banner Image" />
                </div>
            </section>
        </header>
    );
};
export default Header;