import React, { useContext } from 'react'

import './Navbar.css'
import arrow_icon from '../../assets/arrow_icon.png'
import logo from '../../assets/logo3.png'
import { CoinContext } from '../../Context/CoinContext'
import { Link } from 'react-router-dom'
const Navbar = () => {

  const {setCurrency} = useContext(CoinContext)

  const CurrencyHandler = (event) => {
    switch (event.target.value){
      case "usd" : {
        setCurrency({name: "usd", symbol: "$"});
        break;
      }
      case "eur" : {
        setCurrency({name: "eur", symbol: "€"});
        break;
      }
      case "pkr" : {
        setCurrency({name: "pkr", symbol: "Rs"});
        break;
      }
      case "inr" : {
        setCurrency({name: "inr", symbol: "₹"});
        break;
      }
      default: {
        setCurrency({name: "usd", symbol: "$"});
        break;
      }
    }
  }
  
  
  return (
  
  <div className='navbar'>
    <Link to={'/'}>
      <img src={logo} alt="" className='logo'/>
    </Link>
      <ul className='list'>
      <Link to={'/'}>
        <li>Home</li> 
      </Link>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className="nav-right">
        <select onChange={CurrencyHandler}>
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="pkr">PKR</option>
            <option value="inr">INR</option>
        </select>
        <button className='btn'>Sign up <img src={arrow_icon} alt="" /></button>
      </div>
    </div>
  )
}

export default Navbar
