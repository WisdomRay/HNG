// import React from 'react'
// import { Route, Switch } from 'react-router-dom';

import login from './assets/login.svg'
import whitecart from './assets/white-cart.svg'
import hamburger from './assets/quill_hamburger-white.svg'
import banner from './assets/banner.svg'
import sneakersimage from './assets/sneakers-left.png'
import SneakersImage from './assets/sneakers-right.svg'
import description from './assets/description.svg'
import Footer from './components/Footer.jsx'
import shoes from './data/data.js'
import Sneakers from './Sneakers.jsx'
// import { useNavigate } from 'react-router-dom'
// import Sneakers from './Sneakers'

export default function ProductListing() {
  return (
    <div>
        <div className='main-nav'>
            <img src={banner} alt="" id='banner' />
            <div className='overlay'>

                <div className='top-nav'>
                    <p>Reeves</p>
                    <div className='nav-icon'>
                        <img src={whitecart} alt="" />
                        <img src={login} alt="" />
                        <img src={hamburger} alt="" />
                    </div>
                </div>

                <div className='banner-section'>
                    <div className='banner-txt'>
                        Shoes are very important to people because they provide protection and lead us to adventure. In the Holocaust Museum, there are over 25,000 shoes that remain from the ruins of the concentration camps. Everyone who sees these shoes are left with profound thought because every one of them has the imprint of
                    </div>
                    <div className='pb-container'>
                        <button id='product-btn'>Our Product</button>
                    </div>
                </div>

            </div>
        </div>


        <div className='category'>
           <div className='category-card' onClick={() => navigate("/product?type=sneakers")}>
                <img src={sneakersimage} alt="" />
                Sneakers
           </div>
           <div className='category-card' onClick={() => navigate("/product?type=shirts")}>
                <img src={sneakersimage} alt="" />
                Shirts
           </div>
           <div className='category-card' onClick={() => navigate("/product?type=joggers")}>
                <img src={sneakersimage} alt="" />
                Joggers
           </div>
        </div>

        <div className='description'>
            <div className='description-img'>
                <img src={description} alt="" />
            </div>
            <div className='description-txt'>
                <p><strong>The reeves summer parade</strong></p>
                <p>Shoes are very important to people because they provide protection and lead us to adventure. In the Holocaust Museum, there are over 25,000 shoes that remain from the ruins of the concentration camps these shoes are left with profound thought because every one of them has the imprint of</p>
            </div>
        </div>

        <div className="display">
            <div className="display-title">
                <p>Sneakers</p>
                <p>View more</p>
            </div>

            <Sneakers data={shoes} addToCart={addToCart} />


            <div className="display-title">
                <p>Shirts</p>
                <p>View more</p>
            </div>
            <div className="display-card">
                <div className="cards">
                    <img src={SneakersImage} alt="" />
                    <div className="tag">
                        <p>Airforce blue sneaker</p>
                        <span>#12,000</span>
                    </div>
                    <div className="addtocart-btn">Add to cart</div>
                </div>
                <div className="cards">
                    <img src={SneakersImage} alt="" />
                    <div className="tag">
                        <p>Airforce blue sneaker</p>
                        <span>#12,000</span>
                    </div>
                    <div className="addtocart-btn">Add to cart</div>
                </div>
                <div className="cards">
                    <img src={SneakersImage} alt="" />
                    <div className="tag">
                        <p>Airforce blue sneaker</p>
                        <span>#12,000</span>
                    </div>
                    <div className="addtocart-btn">Add to cart</div>
                </div>
                <div className="cards">
                    <img src={SneakersImage} alt="" />
                    <div className="tag">
                        <p>Airforce blue sneaker</p>
                        <span>#12,000</span>
                    </div>
                    <div className="addtocart-btn">Add to cart</div>
                </div>
                
            </div>
            <div className="display-title">
                <p>Joggers</p>
                <p>View more</p>
            </div>
            <div className="display-card">
                <div className="cards">
                    <img src={SneakersImage} alt="" />
                    <div className="tag">
                        <p>Airforce blue sneaker</p>
                        <span>#12,000</span>
                    </div>
                    <div className="addtocart-btn">Add to cart</div>
                </div>
                <div className="cards">
                    <img src={SneakersImage} alt="" />
                    <div className="tag">
                        <p>Airforce blue sneaker</p>
                        <span>#12,000</span>
                    </div>
                    <div className="addtocart-btn">Add to cart</div>
                </div>
                <div className="cards">
                    <img src={SneakersImage} alt="" />
                    <div className="tag">
                        <p>Airforce blue sneaker</p>
                        <span>#12,000</span>
                    </div>
                    <div className="addtocart-btn">Add to cart</div>
                </div>
                <div className="cards">
                    <img src={SneakersImage} alt="" />
                    <div className="tag">
                        <p>Airforce blue sneaker</p>
                        <span>#12,000</span>
                    </div>
                    <div className="addtocart-btn">Add to cart</div>
                </div>
               
            </div>

        </div>

        <Footer />
    </div>
  )
}
