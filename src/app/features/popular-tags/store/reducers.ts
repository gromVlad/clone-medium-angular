import { createReducer, on } from "@ngrx/store";
import { IPopularTagsState } from "../module/popularTagsState.module";
import { getPopularTagsAction, getPopularTagsFailure, getPopularTagsSuccessAction } from "./actions/getPopularTags.action";

const initialState: IPopularTagsState = {
  data: null,
  isLoading: false,
  error: null,
};

export const popularTagsReducer = createReducer(
  initialState,
  on(
    getPopularTagsAction,
    (state): IPopularTagsState => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getPopularTagsSuccessAction,
    (state, action): IPopularTagsState => ({
      ...state,
      isLoading: false,
      data: action.popularTags,
    })
  ),
  on(
    getPopularTagsFailure,
    (state): IPopularTagsState => ({
      ...state,
      isLoading: false,
    })
  )
);

