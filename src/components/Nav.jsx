import orangecart from '../assets/orange-cart.svg'
import orangeuser from '../assets/orange-user.svg'
import orangehamburger from '../assets/orange-hamburger.svg'
import '../App.css'
export default function Nav() {
  return (
    <div>
        <div className='tn'>
            <div>
                <span id='reeves' >Reeves</span>
            </div>
            <div className='gender-category'>
                <ul>
                    <li className='active'>Men</li>
                    <li>Women</li>
                </ul>
            </div>
            <div className='main-nav-icon'>
                <img src={orangecart} alt="" />
                <img src={orangeuser} alt="" />
                <img src={orangehamburger} alt="" />
            </div>
        </div>
    </div>
  )
}
