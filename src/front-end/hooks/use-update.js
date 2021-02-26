// https://stackoverflow.com/a/53180013/8589328
import { useRef, useEffect } from 'react';

export default (fn, inputs) => {
  const didMountRef = useRef(false);

  useEffect(() => {
    if (didMountRef.current) fn();
    else didMountRef.current = true;
  }, inputs);
};
