import React, { useState, useEffect } from 'react';
import { getPath } from './pathService';

const allEqual = arr =>
  arr.every(v => {
    return JSON.stringify(v) === JSON.stringify(arr[0]);
  });

const getToAbsorbState = ({ baseState, list }) => {
  const paths = list.map(item => getPath(baseState, item)).filter(item => item);
  if (allEqual(paths)) {
    return paths[0];
  }
  return null;
};

function useAbsorption({ baseState = {}, absorbs }) {
  const [isAbsorbed, setAbsorbed] = useState(null);

  useEffect(() => {
    setAbsorbed(getToAbsorbState({ baseState, list: absorbs }));
  }, []);

  return isAbsorbed;
}
export default useAbsorption;
