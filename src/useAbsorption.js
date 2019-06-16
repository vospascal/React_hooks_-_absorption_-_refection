import React, { useState, useEffect } from 'react';
import { getPath } from './pathService';

const allEqual = arr =>
  arr.every(v => {
    return JSON.stringify(v) === JSON.stringify(arr[0]);
  });

const getToAbsorbState = ({ state, list }) => {
  const paths = list.map(item => getPath(state, item)).filter(item => item);
  if (allEqual(paths)) {
    return paths[0];
  }
  return null;
};

function useAbsorption({ state = {}, absorbs }) {
  const [isAbsorbed, setAbsorbed] = useState(null);

  useEffect(() => {
    setAbsorbed(getToAbsorbState({ state, list: absorbs }));
  }, []);

  return isAbsorbed;
}
export default useAbsorption;
