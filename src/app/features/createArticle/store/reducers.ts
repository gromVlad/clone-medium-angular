import { createReducer, on } from "@ngrx/store";
import { ICreateArticleState } from "../model/createArticleState.model";
import { createArticleAction, createArticleFailureAction, createArticleSuccessAction } from "./actions/createArticle.action";

const initialState: ICreateArticleState = {
  isSubmitting: false,
  validationErrors: null,
};

export const createArticleReducer = createReducer(
  initialState,
  on(
    createArticleAction,
    (state): ICreateArticleState => ({
      ...state,
      isSubmitting: true,
    })
  ),

  on(
    createArticleSuccessAction,
    (state): ICreateArticleState => ({
      ...state,
      isSubmitting: false,
    })
  ),

  on(
    createArticleFailureAction,
    (state, action): ICreateArticleState => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })
  )
);
