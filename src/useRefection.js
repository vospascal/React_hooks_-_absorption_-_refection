import React, { useState, useEffect } from 'react';
import { setPath } from './pathService';

const getToRefection = ({ absorbedState, baseState, list }) => {
  list.forEach(function(item) {
    setPath(baseState, item, absorbedState);
  });
  return baseState;
};

function useRefection({ absorbedState = {}, baseState = {}, reflections }) {
  const [isRefect, setRefect] = useState(absorbedState);

  useEffect(() => {
    setRefect(getToRefection({ absorbedState, baseState, list: reflections }));
  }, [absorbedState]);

  return isRefect;
}
export default useRefection;
