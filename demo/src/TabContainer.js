import React from 'react';
import useNetworkState from './useNetworkState';

function TabContainer({ children }) {
  const [isFast, setIsFast] = useNetworkState(window.isFastNetwork);

  function handleNetworkChange(e) {
    setIsFast(e.target.value);
  }

  return (
    <>
      <div className="tab-container">
        {children}
      </div>
      <div className="network">
        <input 
          type="radio"
          name="network"
          value={1}
          id="isFast"
          checked={isFast === 1}
          onChange={handleNetworkChange}
        />
        <label htmlFor="isFast">Fast network&nbsp;&nbsp;</label>
        <input 
          type="radio"
          name="network"
          value={0}
          id="isSlow"
          checked={isFast === 0}
          onChange={handleNetworkChange}
        />
        <label htmlFor="isSlow">Slow network</label>
      </div>
    </>
  );
}

export default TabContainer;
