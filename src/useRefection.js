import React, { useState, useEffect } from 'react';
import { setPath } from './pathService';

const getToRefection = ({ state, lala, list }) => {
  list.forEach(function(item) { 
    setPath(lala, item, state)
  });
  return lala
};

function useRefection({ state = {}, lala = {}, reflections }) {
  const [isRefect, setRefect] = useState(state);

  useEffect(() => {
    setRefect(getToRefection({ state, lala, list: reflections }));
  }, [state]);

  return isRefect;
}
export default useRefection;
