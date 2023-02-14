import React, {createContext, useReducer} from 'react';
import {authReducer} from './authReducer';

// State
export interface AuthState {
  isLoggedIn: boolean;
  userName?: string;
  favoriteIcon?: string;
}

// Initial State
export const authInitialState: AuthState = {
  isLoggedIn: false,
  userName: undefined,
  favoriteIcon: undefined,
};

// Context Props (what will be exposed in context)
export interface AuthContextProps {
  authState: AuthState;
  signIn: () => void;
  changeFavIcon: (iconName: string) => void;
  changeUserName: (username: string) => void;
  logOut: () => void;
}

// Context
export const AuthContext = createContext({} as AuthContextProps);

// Provider
export const AuthProvider = ({children}: any) => {
  const [authState, dispatch] = useReducer(authReducer, authInitialState);

  const signIn = () => {
    dispatch({type: 'signIn'});
  };

  const changeFavIcon = (iconName: string) => {
    dispatch({type: 'changeFavIcon', payload: iconName});
  };

  const logOut = () => {
    dispatch({type: 'logOut'});
  };

  const changeUserName = (username: string) => {
    dispatch({type: 'changeUserName', payload: username});
  };

  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn,
        changeFavIcon,
        changeUserName,
        logOut,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
