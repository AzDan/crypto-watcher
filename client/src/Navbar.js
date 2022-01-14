import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Navbar() {
  const serverTime = useSelector(state => state.server.serverTime);

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
          <span>Server Time is - {serverTime}</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
