import { NavLink } from 'react-router-dom';
import logo from '../assets/images/logo.png'

export const Logo = () => {
    return (
        <div className="logo md:w-24 md:h-24  w-28 h-24 ">
          <NavLink to="/"> <img  src={logo} alt="logo" />   </NavLink>
        </div>
    )
}
