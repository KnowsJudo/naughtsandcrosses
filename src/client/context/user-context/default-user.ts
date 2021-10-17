import { TeamType } from 'client/types/enums';
import { IUserState } from './types';

export const initialUserState: IUserState = {
  user: sessionStorage.getItem('User State')
    ? JSON.parse(sessionStorage.getItem('User State') as string)
    : {
        username: '',
        descript: '',
        team: TeamType.DEFAULT,
      },
  isLoading: false,
  isLoggedIn: false,
  error: false,
};
