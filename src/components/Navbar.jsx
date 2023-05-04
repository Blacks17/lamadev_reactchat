import React from "react";

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Blacks Chat</span>
      <div className='user'>
        <img
          src='https://images.pexels.com/photos/3454298/pexels-photo-3454298.jpeg?auto=compress&cs=tinysrgb&w=600'
          alt='profile'
        />
        <span>John</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
