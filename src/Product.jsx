import SneakersImage from './assets/sneakers-right.svg'
import product from './assets/Product.svg'
import Footer from './components/Footer.jsx'
import search from './assets/search.png'
import Navbar from './components/Nav.jsx'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Product() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const type = queryParams.get('type');
    const [active,setActive] = useState(type || "sneakers");
    const navigate = useNavigate()
    
    useEffect(()=>{
        if(type){
            setActive(type)
        }
    },[type])

  return (
    <div>

        <Navbar />

        <div className="product-choice">
            <div>
                <ul>
                    <li className={`${active == "sneakers" ? 'active-route' : null}  `} onClick={() => navigate("/product?type=sneakers")}  id='sneakers-page'>Sneakers</li>
                    <li className={`${active == "shirts" ? 'active-route' : null}`} onClick={() => navigate("/product?type=shirts")}  id='shirts-page'>Shirts</li>
                    <li className={`${active == "joggers" ? 'active-route' : null}`} onClick={() => navigate("/product?type=joggers")}  id='joggers-page'>Joggers</li>
                </ul>
            </div>
            <div className='pc-search'>

                <div>
                    <img src={search} alt="" />
                </div>
                <input type="search" name="" id="" />
            </div>
        </div>


        <div className='description'>
            <div className='description-img'>
                <img src={product} alt="" />
            </div>
            <div className='description-txt'>
                <p><strong>Reeves Jest</strong></p>
                <p>Shoes are very important to people because they provide protection and lead us to adventure. In the Holocaust Museum, there are over 25,000 shoes that remain from the ruins of the concentration camps these shoes are left with profound thought because every one of them has the imprint of</p>
            </div>
        </div>
        
        <div className="display">
            <div className="display-title">
                <p>Sneakers</p>
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
