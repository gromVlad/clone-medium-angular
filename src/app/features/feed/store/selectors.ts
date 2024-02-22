import { IAppState } from "src/app/shared/model/appState.model";
import { IFeedState } from "../model/feedState.model";
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const feedFeatureSelector = createFeatureSelector<
  IAppState,
  IFeedState
>('feed');

export const isLoadingSelector = createSelector(
  feedFeatureSelector,
  (feedState: IFeedState) => feedState.isLoading
);

export const errorSelector = createSelector(
  feedFeatureSelector,
  (feedState: IFeedState) => feedState.error
);

export const feedSelector = createSelector(
  feedFeatureSelector,
  (feedState: IFeedState) => feedState.data
);
