import { NavLink } from 'react-router-dom';
import logo from '../../images/Logo.png'

const Header = () => {
    return (
      <div>
        <div className="navbar bg-base-100">
          <div className="flex-1">
            <img src={logo} alt="" />
          </div>
          <div className="flex-none">
            <ul className='flex'>
              <li className="font-bold mr-5">
                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-[#FF444A] underline"
                      : ""
                  }
                >
                  Home
                </NavLink>
              </li>
              <li className="font-bold mr-5">
                <NavLink
                  to="/donation"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-[#FF444A] underline"
                      : ""
                  }
                >
                  Donation
                </NavLink>
              </li>
              <li className="font-bold">
                <NavLink
                  to="/statistics"
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-[#FF444A] underline"
                      : ""
                  }
                >
                  Statistics
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
};

export default Header;