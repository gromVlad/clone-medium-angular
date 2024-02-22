import { IAuthState } from "src/app/features/auth/model/authState.model";
import { IFeedState } from "src/app/features/feed/model/feedState.model";

export interface IAppState {
  auth: IAuthState;
  feed: IFeedState;
}
