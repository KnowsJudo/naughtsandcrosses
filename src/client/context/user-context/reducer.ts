import { IUserState, UserActions } from './types';
import { TeamType } from 'client/types/enums';

export const userReducer = (
  state: IUserState,
  action: UserActions,
): IUserState => {
  switch (action.type) {
    case 'logout': {
      return {
        ...state,
        isLoggedIn: false,
        user: undefined,
      };
    }

    case 'success': {
      return {
        ...state,
        error: false,
        isLoading: false,
        isLoggedIn: true,
      };
    }

    case 'failure': {
      return {
        ...state,
        error: true,
        isLoading: false,
        isLoggedIn: false,
      };
    }
    case 'login': {
      return {
        error: false,
        isLoading: true,
        isLoggedIn: false,
        user: { ...state.user, ...action.user },
      };
    }

    case 'Crosses': {
      return {
        ...state,
        user: { ...state.user, team: TeamType.CROSS },
      };
    }

    case 'Naughts': {
      return {
        ...state,
        user: { ...state.user, team: TeamType.NAUGHT },
      };
    }
    case 'win': {
      return {
        ...state,
        user: { ...state.user, winner: true },
      };
    }
    case 'lose': {
      return {
        ...state,
        user: { ...state.user, winner: false },
      };
    }

    default:
      break;
  }

  return state;
};
