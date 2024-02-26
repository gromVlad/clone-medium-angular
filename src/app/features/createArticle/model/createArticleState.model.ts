import { IBackendErrors } from "src/app/shared/model/backendErrors.model";

export interface ICreateArticleState {
  isSubmitting: boolean;
  validationErrors: IBackendErrors | null;
}
