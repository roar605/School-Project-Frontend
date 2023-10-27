import { useState, useEffect } from 'react';

function useSessionStorage(key, keyValue) {
  
  const currValue = sessionStorage.getItem(key);
  const curr = currValue ? JSON.parse(currValue) : keyValue;
  const [value, setValue] = useState(curr);

  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useSessionStorage;
