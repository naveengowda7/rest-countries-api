import { useEffect, useState } from "react";

export const useLocalStorage = (key, initialData) => {
  const [data, setData] = useState(() => {
    const existingData = localStorage.getItem(key);
    return existingData ? JSON.parse(existingData) : initialData;

  });


  useEffect(() => {
    // Update localStorage when data changes
    localStorage.setItem(key, JSON.stringify(data));
  }, [key, data]);

  const updateLocalStorage = (newData) => {

    setData(prevData => {
      const updatedData = typeof newData === 'function' ? newData(prevData) : newData;
      localStorage.setItem(key, JSON.stringify(updatedData));
      return updatedData;
    });
  };



  return [data, updateLocalStorage];
};



