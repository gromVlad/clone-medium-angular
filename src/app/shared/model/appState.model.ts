import { IAuthState } from "src/app/features/auth/model/authState.model";
import { IFeedState } from "src/app/features/feed/model/feedState.model";
import { IPopularTagsState } from "src/app/features/popular-tags/module/popularTagsState.module";

export interface IAppState {
  auth: IAuthState;
  feed: IFeedState;
  popularTags: IPopularTagsState;
}
