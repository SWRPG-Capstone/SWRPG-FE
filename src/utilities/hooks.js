import { useEffect, useState } from 'react';

export const useDebouncedValue = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
};

export const useToken = () => {
  const getToken = () => {
    const jsonToken = localStorage.getItem('swtoken');
    return JSON.parse(jsonToken);
  };

  const [token, setToken] = useState(getToken());

  const saveToken = (loginToken) => {
    localStorage.setItem('swtoken', JSON.stringify(loginToken));
    setToken(loginToken);
  };

  return {
    setToken: saveToken,
    token,
  };
};
