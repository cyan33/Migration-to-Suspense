import { useState } from 'react';

function getIsFastNetwork() {
  const isFast = parseInt(localStorage.getItem('fastNetwork')) === 0
    ? 0 : 1;
  window.fastNetwork = isFast;
  return isFast;
}

function useNetworkState() {
  const [isFast, setIsFast] = useState(getIsFastNetwork());
  
  function setIsFastNetwork(isFast) {
    isFast = parseInt(isFast);

    localStorage.setItem('fastNetwork', isFast);
    window.fastNetwork = isFast;
    setIsFast(isFast);
  }

  return [isFast, setIsFastNetwork];
}

export default useNetworkState;
