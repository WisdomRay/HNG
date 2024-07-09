import Navbar from './components/Nav.jsx'
// import cartbackground from './assets/cart-background.png'
import leftsneaker from './assets/sneakers-left.png'
import Footer from './components/Footer.jsx'
export default function Cart() {
  return (
    <div>
      <Navbar />

      <div className="title">
        Cart
      </div>

      <div className="main-section">

        <div className="items-summary">
          
          <div className="show-items">
            <p>Items</p>

            <div className="items-display">
                <div className='id-img'>
                  <img src={leftsneaker} alt="" />
                </div>

                <div className="item-descriptions">
                  <div id='final-description'>
                    <div>
                      Python Air sneaker
                    </div>
                    <div id='delete'>
                      {/* <img src={leftsneaker} alt="." /> */}
                      Remove
                    </div>

                  </div>
                  <p>Color:Blue</p>

                  <div id='size'>
                    <p>Python Air sneaker</p>
                    <span id='count'>
                      <button className='id' id='increment'>-</button>
                      1
                      <button className='id' id="decrement">+</button>
                    </span>

                  </div>

                 <p>#35000</p>

                </div>
                
            </div>
              
              <hr />

            <div className="items-display">
                <div className='id-img'>
                  <img src={leftsneaker} alt="" />
                </div>

                <div className="item-descriptions">
                  <div id='final-description'>
                    <div>
                      Python Air sneaker
                    </div>
                    <div id='delete'>
                      {/* <img src={leftsneaker} alt="." /> */}
                      Remove
                    </div>

                  </div>
                  <p>Color:Blue</p>

                  <div id='size'>
                    <p>Python Air sneaker</p>
                    <span id='count'>
                      <button className='id' id='increment'>-</button>
                      1
                      <button className='id' id="decrement">+</button>
                    </span>

                  </div>

                 <p>#35000</p>

                </div>
            </div>
          </div>

      
        </div>
        <div className="summary">
            <table className='checkout-summary'>
              <caption>Order Summary</caption>
              <tr>
                <td>Subtotal:</td>
                <th>#35,000</th>
              </tr>
              <tr>
                <td>Shipping fee:</td>
                <th>#1200</th>
              </tr>
              <tr>
                <td>Total:</td>
                <th>#36200</th>
              </tr>
            </table>

            <button id="checkout">Check out</button>

          </div>
      </div>
      <Footer />
    </div>
  )
}
