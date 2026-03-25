import React, { useEffect, useState } from 'react'
import './navbarbelt.css'
import amazonLogo from '../../../assets/amazonLogo.png'
import india from '../../../assets/india.png'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbarbelt = () => {
  const cartItems = useSelector((state) => state.cart);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [ searchQuery , setSearchQuery] = useState("")
  const [ searchParams , setSearchParams] = useSearchParams()
  const navigate = useNavigate()
  const categories = [
    'All',
    'Electronics',
    'Fashion',
    'Home & Kitchen',
    'Books',
    'Toys',
    'Beauty',
    'Mobiles',
    'Grocery',
  ];

const handleCategorySelect = (category) => {
  setSelectedCategory(category);
  setIsDropdownOpen(false);

  const newParams = new URLSearchParams(searchParams);
  if (category === "All") {
    newParams.delete("category");
  } else {
    newParams.set("category", category);
  }

  setSearchParams(newParams);
};



useEffect(() => {
  const newParams = new URLSearchParams(searchParams);

  if (searchQuery.trim().length === 0) {
    // 🧹 Remove item param if search box is empty
    newParams.delete("item");
  } else {
    // 🕒 Add or update item param with debounce
    const timeoutId = setTimeout(() => {
      newParams.set("item", searchQuery);
      setSearchParams(newParams);
    }, 500);

    return () => clearTimeout(timeoutId);
  }

  // Apply change immediately if deleting
  setSearchParams(newParams);
}, [searchQuery, searchParams, setSearchParams]);



  return (
    <div className='navbarbelt'>
      <div className='navBeltleft'>
        <Link to='/' className='leftNavBeltLogo'>
          <img className='amazonLogo' src={amazonLogo} alt='amazonLogo' />
          <span className='india_logo'>.in</span>
        </Link>

        <div className='navbarBeltLocation'>
          <div className='navbarBeltLocationImg'>
            <LocationOnOutlinedIcon />
          </div>
          <div className='navbarBeltLocationPlace'>
            <div className='navbarBletLocationTop'>Delivering To Navi Mumbai 411031</div>
            <div className='navbarBeltLocationBottom'>Update Location</div>
          </div>
        </div>
      </div>

      {/* 🔍 Search Box */}
      <div className='navbeltSearchBox'>
        <div className='navbarBeltSearchDiv'>
          <div
            className='navbarBeltSearchBoxAll'
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <div className='navbarBeltSearchBoxAllText'>{selectedCategory}</div>
            <ArrowDropDownOutlinedIcon sx={{ fontSize: "20px" }} />
            {isDropdownOpen && (
              <div className='dropdownMenu'>
                {categories.map((cat, index) => (
                  <div
                    key={index}
                    className='dropdownItem'
                    onClick={() => handleCategorySelect(cat)}
                  >
                    {cat}
                  </div>
                ))}
              </div>
            )}
          </div>

          <input
            type='text'
            className='navbarBeltInputSearchBox'
            placeholder={`Search ${selectedCategory}`}
            onChange={(e)=>{setSearchQuery(e.target.value)}}
          />

          <div className='searchIconNavbarBelt'>
            <SearchOutlinedIcon sx={{ fontSize: "26px" }} className='searchIconNavbarBeltIcon' />
          </div>
        </div>
      </div>

      
      <div className='navBeltright'>
        <div className='indianFlagCode'>
          <img src={india} className='indiaFlag' />
          <div className='indiaCodeNavbarBelt'>EN
            <ArrowDropDownOutlinedIcon sx={{ fontSize: 16, marginTop: 1, marginLeft: -0.4 }} />
          </div>
        </div>

        <div className='helloSignInNavbarBelt'>
          <div className='helloTopavbarBelt'>Hello</div>
          <div className='signInBottomNavbarBelt'>Accounts & Lists</div>
        </div>

        <div className='helloSignInNavbarBelt'>
          <div className='helloTopavbarBelt'>Returns</div>
          <div className='signInBottomNavbarBelt'>& Orders</div>
        </div>

        <Link to='/cart' className='helloSignInNavbarBelt'>
          <span className='cartItemNumberNavbarBelt'>{cartItems?.items?.length}</span>
          <div className='helloTopNavbarBelt'>
            <ShoppingCartOutlinedIcon /> <span className='cartTitle'>Cart</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbarbelt;
