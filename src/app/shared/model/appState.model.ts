import { IAuthState } from "src/app/features/auth/model/authState.model";
import { IFeedState } from "src/app/features/feed/model/feedState.model";
import { IPopularTagsState } from "src/app/features/popular-tags/module/popularTagsState.module";
import { IArticleState } from "src/app/features/article/model/articleState.model";
import { ICreateArticleState } from "src/app/features/createArticle/model/createArticleState.model";
import { ISettingsState } from "src/app/features/settings/types/settingsState.model";
import { IUserProfileState } from "src/app/features/userProfile/model/userProfileState.model";

export interface IAppState {
  auth: IAuthState;
  feed: IFeedState;
  popularTags: IPopularTagsState;
  article: IArticleState;
  createArticle: ICreateArticleState;
  settings: ISettingsState;
  userProfile: IUserProfileState;
}
