import { ICurrentUser } from "src/app/shared/model/currentUser.model";

export interface IAuthResponse {
  user: ICurrentUser;
}
