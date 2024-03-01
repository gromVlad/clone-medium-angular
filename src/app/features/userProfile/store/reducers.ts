import { createReducer, on } from "@ngrx/store"
import { IUserProfileState } from "../model/userProfileState.model"
import { getUserProfileAction, getUserProfileFailureAction, getUserProfileSuccessAction } from "./actions/getUserProfile.action";


const initialState: IUserProfileState = {
  data: null,
  isLoading: false,
  error: null
}

export const userProfileReducer = createReducer(
  initialState,
  on(
    getUserProfileAction,
    (state): IUserProfileState => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getUserProfileSuccessAction,
    (state, action): IUserProfileState => ({
      ...state,
      isLoading: false,
      data: action.userProfile,
    })
  ),
  on(
    getUserProfileFailureAction,
    (state): IUserProfileState => ({
      ...state,
      isLoading: false,
    })
  )
);

