import { IArticle } from "src/app/shared/model/article.model";

export interface IGetFeedResponse {
  articles: IArticle[];
  articlesCount: number;
}
