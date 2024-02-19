import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICurrentUser } from 'src/app/shared/model/currentUser.model';
import { IRegisterRequest } from '../model/registerRequest.model';
import { IAuthResponse } from '../model/authResponse.model';
import { HttpClient } from '@angular/common/http';
import { ILoginRequest } from '../model/loginRequest.model';

@Injectable({ providedIn: 'root' })
export class AuthService {
  
  getUser(response: IAuthResponse): ICurrentUser {
    return response.user;
  }
  constructor(private http: HttpClient) {}

  register(data: IRegisterRequest): Observable<ICurrentUser> {
    const url = environment.apiUrl + '/users';
    return this.http.post<IAuthResponse>(url, data).pipe(map(this.getUser));
  }

  login(data: ILoginRequest): Observable<ICurrentUser> {
    const url = environment.apiUrl + '/users/login';
    return this.http.post<IAuthResponse>(url, data).pipe(map(this.getUser));
  }

  getCurrentUser(): Observable<ICurrentUser> {
    const url = environment.apiUrl + '/user';
    return this.http
      .get<IAuthResponse>(url)
      .pipe(map((response) => response.user));
  }
}
