import { IUser } from '../requests/IUser';

export interface RefreshResponse {
    newAccessToken: string;
    user: IUser;
}
