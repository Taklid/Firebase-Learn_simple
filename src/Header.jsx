import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div className="text-center">
           <NavLink className='mr-3' to='/'>Home</NavLink>
           <NavLink to='/login'>Login</NavLink>
        </div>
    );
};

export default Header;