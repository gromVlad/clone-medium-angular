import { createReducer, on } from '@ngrx/store';
import { IArticleState } from '../model/articleState.model'
import { getArticleAction, getArticleFailureAction, getArticleSuccessAction } from './actions/getArticle.action'
import { routerNavigationAction } from '@ngrx/router-store';


const initialState: IArticleState = {
  data: null,
  isLoading: false,
  error: null
}

export const articleReducer = createReducer(
  initialState,
  on(
    getArticleAction,
    (state): IArticleState => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getArticleSuccessAction,
    (state, action): IArticleState => ({
      ...state,
      isLoading: false,
      data: action.article,
    })
  ),
  on(
    getArticleFailureAction,
    (state): IArticleState => ({
      ...state,
      isLoading: false,
    })
  ),
  on(routerNavigationAction, (): IArticleState => initialState)
);

