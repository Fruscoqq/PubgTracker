import React, { useContext } from 'react';
import Rs6Context from '../../context/rs6/Rs6Context';

const Overlay = () => {
  const rs6Context = useContext(Rs6Context);
  return (

    rs6Context.set_loading === true && (
      <div className="overlay">

      </div>
    )

  )
}

export default Overlay
