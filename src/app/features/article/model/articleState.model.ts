import { IArticle } from 'src/app/shared/model/article.model'

export interface IArticleState {
  isLoading: boolean
  error: string | null
  data: IArticle | null
}
