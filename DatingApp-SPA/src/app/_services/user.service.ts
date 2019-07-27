import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../_models/User';

const httpOptions = {
  headers: new HttpHeaders({
    Authorization: 'Bearer ' + localStorage.getItem('token')
  })
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.apiUrl;

constructor(private http: HttpClient) { }

// method for get all users
getUsers(): Observable<User[]> {
  return this.http.get<User[]>(this.baseUrl + 'users', httpOptions);
}
// get one user infomation
getUser(id): Observable<User> {
  return this.http.get<User>(this.baseUrl + 'users/' + id, httpOptions);
}

}
