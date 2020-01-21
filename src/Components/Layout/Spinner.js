import React, { useContext, Fragment } from 'react';
import spinner from '../../images/spinner.gif';
import Rs6Context from '../../context/rs6/Rs6Context';

const Spinner = () => {
  const rs6Context = useContext(Rs6Context);
  return (
    <div className="div">
      {rs6Context.set_loading && (
        <Fragment>
          <img src={spinner} alt="" className="d-block mx-auto" />
        </Fragment>
      )}
    </div>
  )
}

export default Spinner
