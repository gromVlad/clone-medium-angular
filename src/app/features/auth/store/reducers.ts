import { createReducer, on } from "@ngrx/store";
import { IAuthState } from "../model/authState.model";
import { registerAction } from "./actions";


const initialState: IAuthState = {
  isSubmitting: false,
};

export const authReducer = createReducer(
  initialState,
  on(
    registerAction,
    (state): IAuthState => ({
      ...state,
      isSubmitting: true,
    })
  )
);

