import { IUser } from "../request/IUser";

export interface RefreshResponse {
  newAccessToken: string;
  user: IUser;
}
