import React, { useContext } from 'react'
import Rs6Context from '../../context/rs6/Rs6Context';

const Footer = () => {
  const rs6Context = useContext(Rs6Context);
  return (
    rs6Context.set_loading !== true && (
      <div className="text-center text-light">
        <p>© 2020 All Rights Reserved<br />
          Data based on <a href="https://developer.pubg.com/" className="text-decoration-none text-reset">PLAYERUNKNOWN’S BATTLEGROUNDS</a><br />
          Made with <i class="fas fa-heart text-danger mx-1" /> by Arvydas</p>
      </div>
    )
  )
}

export default Footer
