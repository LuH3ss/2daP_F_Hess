import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from './users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  root_url='https://62a7cf34bedc4ca6d7cdbac8.mockapi.io/Alumnos';

  constructor(private http: HttpClient) { }

  getUsersList(): Observable<Users[]>  {
      return this.http.get<Users[]>(this.root_url + 'users');
}

getSingleUser(id:number): Observable<Users> {
      return this.http.get<Users>(this.root_url + id);
  }



  createUsers(user: Users): Observable<Users> {
      return this.http.post<Users>(this.root_url, user);
  }

  updateUsers(user: Users): Observable<Users> {
      return this.http.put<Users>(this.root_url + 'users/' + user.id, user);
  }

  deleteUsers(id: number): Observable<Users> {
      return this.http.delete<Users>(this.root_url + 'users/' + id);
  }
}

