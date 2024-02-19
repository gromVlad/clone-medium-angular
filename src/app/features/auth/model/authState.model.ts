import { IBackendErrors } from "src/app/shared/model/backendErrors.model";
import { ICurrentUser } from "src/app/shared/model/currentUser.model";

export interface IAuthState {
  isSubmitting: boolean;
  currentUser: ICurrentUser | null;
  isLoggedIn: boolean | null;
  validationErrors: IBackendErrors | null;
}
