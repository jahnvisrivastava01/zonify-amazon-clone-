import React, { useState } from 'react';
import './navbarbanner.css';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { Link } from 'react-router-dom';

const NavbarBanner = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const options = [
    { name: "Fresh" },
    { name: "Zonify" },
    { name: "Sell" },
    { name: "Best Sellers" },
    { name: "Todays Deal" },
    { name: "Mobiles" },
    { name: "New Releases" },
    { name: "Electronics" },
    { name: "Customer Service" },
    { name: "Home & Kitchen" },
    { name: "Prime" },
    { name: "Fashion" },
    { name: "Zonify Pay" },
    { name: "Books" },
    { name: "Computers" },
    { name: "Home Improvement" }
  ];

  return (
    <div className='navbarbanner'>
      <div className='navbarBannerOptionsLeft'>

        {/* ☰ Menu Icon */}
        <div className='optionsNavBarBanner menuButton' onClick={() => setMenuOpen(true)}>
          <MenuOutlinedIcon sx={{ fontSize: "24px" }} />
          <div className='allOptionsNavbarBanner'>All</div>
        </div>

        {/* Categories next to menu */}
        {options.map((item, ind) => (
          <Link to={'/products'} className='optionsNavBarBanner' key={ind}>
            <div className='allOptionsNavbarBanner'>{item.name}</div>
          </Link>
        ))}
      </div>

      {/* 🧱 Side Menu Overlay */}
      {menuOpen && (
        <>
          <div className="menuOverlay" onClick={() => setMenuOpen(false)}></div>
          <div className="sideMenu">
            <div className="sideMenuHeader">
              <p>Hello,</p>
              <div>
                <Link to="/signin" className="menuLink">Sign In</Link> /{" "}
                <Link to="/signup" className="menuLink">Sign Up</Link>
              </div>
              <CloseOutlinedIcon className="closeMenuIcon" onClick={() => setMenuOpen(false)} />
            </div>

            <div className="sideMenuOptions">
              {options.map((item, i) => (
                <div key={i} className="sideMenuItem">
                  {item.name}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default NavbarBanner;
