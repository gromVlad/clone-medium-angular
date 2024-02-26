import { IAuthState } from "src/app/features/auth/model/authState.model";
import { IFeedState } from "src/app/features/feed/model/feedState.model";
import { IPopularTagsState } from "src/app/features/popular-tags/module/popularTagsState.module";
import { IArticleState } from "src/app/features/article/model/articleState.model";
import { ICreateArticleState } from "src/app/features/createArticle/model/createArticleState.model";

export interface IAppState {
  auth: IAuthState;
  feed: IFeedState;
  popularTags: IPopularTagsState;
  article: IArticleState;
  createArticle: ICreateArticleState;
}
