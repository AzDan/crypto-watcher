import React from 'react';

function Navbar() {
  return (
    <div className='container'>
      <div className='navbar'>
        <div className='navbar navbar-left'>
          <span className='title'>Crypto Watcher</span>
          <ul>
            <li>Home</li>
            <li>Funds</li>
          </ul>
        </div>

        <div className='navbar navbar-right'>
          <span>Server Time is - </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
