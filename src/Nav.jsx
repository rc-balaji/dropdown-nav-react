import { useEffect, useState } from 'react'
import './Nav.css'
import logo from './assets/nav-logo.png'
import {NavLink, Link} from 'react-router-dom';



function App() {

  const [co1,setCO1]=useState("Products")
  const [co2,setCO2]=useState("Items")
  return (
    <>
    <div className='main'>
      <nav className='nav'>
        <div className='nav1'>
          <ol className="l1" style={{listStyle:"none"}}>
            <li style={{paddingRight:20}}><Link to={"/"}><img className="img" src={logo} alt="logo" /> </Link></li>
            <li className='comp'>
            <NavLink exact="true" activeclassname='is-active' to={`/`}><button className='navb'>Home</button></NavLink> 
              </li>
            <li className='comp'>
             
            <div className='combo'>
            <span>Products</span>
                <div className="dropdown-content">
                    <ol className='dropl'>
                        <li><Link className='link' to="./pro1">Product-1</Link></li>
                        <li><Link className='link' to="./pro2">Product-2</Link></li>
                        <li><Link className='link' to="./pro3">Product-3</Link></li>
                      
                    </ol>
                </div>
            </div>

            </li>
            <li className='comp'><Link to="/picking"><button className='navb'>Picking</button></Link></li>
            <li className='comp'><Link to="/dash"><button className='navb'>DashBoard</button></Link></li>
          
          
          </ol>
        </div>
        <div className='nav2'>
            <ol className='l2' style={{listStyle:"none"}}>
              <li className='comp' ><Link to="/login"><button className='butn' id='b1'>Log in</button></Link></li>
              <li className='comp' ><Link to="/sign"><button className='butn'id='b2'>Sign in</button></Link></li>
            </ol>
        </div>
      </nav>
    </div>
    </>
  )
}

export default App
