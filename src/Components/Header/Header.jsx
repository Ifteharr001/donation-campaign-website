import { NavLink } from 'react-router-dom';
import logo from '../../images/Logo.png'

const Header = () => {
    return (
      <div>
        <div className="navbar absolute z-10 flex-none md:flex">
          <div className="flex-1 ">
            <img className="max-w-[80%] md:max-w-[100%]" src={logo} alt="" />
          </div>
          <div className="flex-none">
            <ul className="flex-none md:flex">
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