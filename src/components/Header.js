import React from 'react';
import closeIcon from './../assets/close-icon.png';

function Header(props) {
  return (
    <div className="sc-header">
      <img className="sc-header--img" alt="" />
      <div className="sc-header--team-name"> </div>
      <div className="sc-header--close-button" >
        <img  alt="" />
      </div>
    </div>
  );
}

export default Header;
