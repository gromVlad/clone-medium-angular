import { IAppState } from "src/app/shared/model/appState.model";
import { IPopularTagsState } from "../module/popularTagsState.module";
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const popularTagsFeatureSelector = createFeatureSelector<
  IAppState,
  IPopularTagsState
>('popularTags');

export const popularTagsSelector = createSelector(
  popularTagsFeatureSelector,
  (popularTagsState: IPopularTagsState) => popularTagsState.data
);

export const isLoadingSelector = createSelector(
  popularTagsFeatureSelector,
  (popularTagsState: IPopularTagsState) => popularTagsState.isLoading
);

export const errorSelector = createSelector(
  popularTagsFeatureSelector,
  (popularTagsState: IPopularTagsState) => popularTagsState.error
);
