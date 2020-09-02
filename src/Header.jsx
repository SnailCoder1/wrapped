import React  from "react"
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="header">
      <h1 className="header-title">
        <Link className="text-white hover:text-grey no-underline" to='/'>Boa Matule</Link>
      </h1>

      <ul className="list-reset flex">
        {/* <li className="mr-6"><NavLink className="text-white hover:text-grey no-underline" activeStyle={{fontWeight: "bold"}} to='/about'>About Me</NavLink></li> */}
        <li className="mr-6"><NavLink className="text-white hover:text-grey no-underline" activeStyle={{fontWeight: "bold"}} to='/projects'>Portfolio</NavLink></li>
        <li className="mr-6"><NavLink className="text-white hover:text-grey no-underline" activeStyle={{fontWeight: "bold"}} to='/cv'>CV</NavLink></li>
        <li className="mr-6"><NavLink className="text-white hover:text-grey no-underline" activeStyle={{fontWeight: "bold"}} to='/contact'>Get in Touch</NavLink></li>
      </ul>

      <div class="block lg:hidden">
        <label for="menu-toggle" class="flex items-right px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-grey hover:border-white cursor-pointer ">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </label>
      </div>

      {/* <label for="menu-toggle" className="cursor-pointer lg:hidden block"> */}

      {/* </label> */}
    </nav>
  )    
}

export default Header