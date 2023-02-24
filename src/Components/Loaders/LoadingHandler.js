import React, { useContext, createContext, useState } from "react";
import { useMemo } from "react";

const LoadingContext = createContext(() => {});
export const useLoadingContext = () => useContext(LoadingContext);

const LoadingHandler = (props) => {
  const [mainLoaderOpen, setMainLoaderOpen] = useState(false);
  const contextPayload = useMemo(
    () =>
      ({
        setMainLoaderOpen,
        mainLoaderOpen,
      }),[mainLoaderOpen]

  );
  return <LoadingContext.Provider value={contextPayload} {...props} />;
};

export default LoadingHandler;
