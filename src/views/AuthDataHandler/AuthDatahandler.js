import { Auth } from "aws-amplify";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
} from "react";
import { useLoadingContext } from "../../Components/Loaders/LoadingHandler";

const AuthDataContext = createContext(() => {});

export const useAuthDataContext = () => useContext(AuthDataContext);

const clearAuthData = {};

const AuthDatahandler = (props) => {
  const { setMainLoaderOpen } = useLoadingContext();
  const [isLoggedin, setIsLoggedIn] = useState(false);
  const [authData, setAuthData] = useState(clearAuthData);
  useEffect(() => {
    setMainLoaderOpen(true);
    Auth.currentAuthenticatedUser()
      .then((res) => {
        setAuthData(res);
        setIsLoggedIn(true);
        setMainLoaderOpen(false);
      })
      .catch(() => {
        setAuthData(clearAuthData);
        setIsLoggedIn(false);
        setMainLoaderOpen(false);
      });
  }, []);
  const signIn = async (username, password) => {
    setMainLoaderOpen(true);
    await Auth.signIn(username, password)
      .then((res) => {
        setAuthData(res);
        setIsLoggedIn(true);
        setMainLoaderOpen(false);
      })
      .catch(() => {
        setAuthData(clearAuthData);
        setIsLoggedIn(false);
        setMainLoaderOpen(false);
      });
  };
  const signOut = async () => {
    setMainLoaderOpen(true);
    await Auth.signOut()
      .then((res) => {
        setAuthData(clearAuthData);
        setIsLoggedIn(false);
        setMainLoaderOpen(false);
      })
      .catch(() => {
        setIsLoggedIn(false);
        setMainLoaderOpen(false);
      });
  };
  const contextPayload = useMemo(
    () => ({
      userAuthData: authData,
      signIn: signIn,
      isLoggedin: isLoggedin,
      signOut: signOut,
    }),
    [authData]
  );
  return <AuthDataContext.Provider value={contextPayload} {...props} />;
};

export default AuthDatahandler;
