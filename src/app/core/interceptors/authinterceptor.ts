import { HttpHandlerFn,HttpRequest } from "@angular/common/http";
import {  inject } from "@angular/core";
import { PersistanceService } from "src/app/shared/service/persistance.service";

export function AuthInterceptor(request: HttpRequest<any>, next: HttpHandlerFn) {
  const persistanceService = inject(PersistanceService);
  const token = persistanceService.get('accessToken');
  request = request.clone({
    setHeaders: {
      Authorization: token ? `Token ${token}` : '',
    },
  });

  return next(request);
}