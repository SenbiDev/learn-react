import React, { useEffect } from 'react';

const withResourceCleaner = (WrappedComponent, resourceName) => {
  return (props) => {
    useEffect(() => {
      console.log(`Resource ${resourceName} diinisialisasi`);
      
      // Simulasi resource (bisa WebSocket, interval, dll)
      const intervalId = setInterval(() => {
        console.log(`[${resourceName}] Active resource`);
      }, 1000);
      
      // Cleanup function
      return () => {
        console.log(`Cleaning up resources for ${resourceName}`);
        clearInterval(intervalId);
      };
    }, []);

    return <WrappedComponent {...props} />;
  };
};

export default withResourceCleaner;