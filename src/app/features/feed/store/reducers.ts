import { createReducer, on } from "@ngrx/store";
import { IFeedState } from "../model/feedState.model";
import { getFeedAction, getFeedFailureAction, getFeedSuccessAction } from "./actions/getFeed.action";
import { routerNavigationAction } from "@ngrx/router-store";

const initialState: IFeedState= {
  data: null,
  isLoading: false,
  error: null,
};

export const feedReducer = createReducer(
  initialState,
  on(
    getFeedAction,
    (state): IFeedState => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getFeedSuccessAction,
    (state, action): IFeedState => ({
      ...state,
      isLoading: false,
      data: action.feed,
    })
  ),
  on(
    getFeedFailureAction,
    (state): IFeedState => ({
      ...state,
      isLoading: false,
    })
  ),
  on(routerNavigationAction, (): IFeedState => initialState)
);
