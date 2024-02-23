import {createAction, props} from '@ngrx/store'
import {ActionTypes} from '../actionTypes'
import { IArticle } from 'src/app/shared/model/article.model'

export const getArticleAction = createAction(
  ActionTypes.GET_ARTICLE,
  props<{slug: string}>()
)

export const getArticleSuccessAction = createAction(
  ActionTypes.GET_ARTICLE_SUCCESS,
  props<{article: IArticle}>()
)

export const getArticleFailureAction = createAction(
  ActionTypes.GET_ARTICLE_FAILURE
)
