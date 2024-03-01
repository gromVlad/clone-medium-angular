import { ICurrentUser } from "./currentUser.model";

export interface ICurrentUserInput extends ICurrentUser {
  password: string;
}
