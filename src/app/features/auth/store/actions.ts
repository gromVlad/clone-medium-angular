import { createAction, props } from "@ngrx/store";
import { ActionTypes } from "./actionTypes";
import { IRegisterRequest } from "../model/registerRequest.model";
import { ICurrentUser } from "src/app/shared/model/currentUser.model";
import { IBackendErrors } from "src/app/shared/model/backendErrors.model";

export const registerAction = createAction(
  ActionTypes.REGISTER,
  props<{ request: IRegisterRequest }>()
);

export const registerSuccessAction = createAction(
  ActionTypes.REGISTER_SUCCESS,
  props<{ currentUser: ICurrentUser }>()
);

export const registerFailureAction = createAction(
  ActionTypes.REGISTER_FAILURE,
  props<{ errors: IBackendErrors }>()
);