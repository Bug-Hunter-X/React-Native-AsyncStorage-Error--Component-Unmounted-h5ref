// AsyncStorageBugSolution.js
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DataRetrieval = () => {
  const [data, setData] = useState(null);
  const [isMounted, setIsMounted] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const value = await AsyncStorage.getItem('@my_key');
        if (isMounted) {
          setData(value);
        }
      } catch (e) {
        console.error('Error fetching data:', e);
      }
    };
    fetchData();
    return () => {
      setIsMounted(false); // Prevent updates after unmount
    };
  }, []);

  return (
    <div>
      {data ? <p>Data from AsyncStorage: {data}</p> : <p>Loading...</p>}
    </div>
  );
};

export default DataRetrieval;