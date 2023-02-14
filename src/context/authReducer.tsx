import {AuthState} from './AuthContext';

// Actions
type AuthAction =
  | {type: 'signIn'}
  | {type: 'changeFavIcon'; payload: string}
  | {type: 'logOut'}
  | {type: 'changeUserName'; payload: string};

export const authReducer = (
  state: AuthState,
  action: AuthAction,
): AuthState => {
  switch (action.type) {
    case 'signIn':
      return {
        ...state,
        isLoggedIn: true,
        userName: 'no-username-yet',
      };
    case 'changeFavIcon':
      return {
        ...state,
        favoriteIcon: action.payload,
      };
    case 'changeUserName':
      return {
        ...state,
        userName: action.payload,
      };
    case 'logOut':
      return {
        ...state,
        isLoggedIn: false,
        userName: undefined,
        favoriteIcon: undefined,
      };
    default:
      return state;
  }
};
