import { IBackendErrors } from 'src/app/shared/model/backendErrors.model'

export interface ISettingsState {
  isSubmitting: boolean
  validationErrors: IBackendErrors | null
}
