import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUr = `http://localhost:3000/api/v1`
  constructor(private http: HttpClient) { }

  // Get all users
  getUsers() {
    return this.http.get(`${this.apiUr}/users`)
  }

  // Get user by id
  getUser(id: string) {
    return this.http.get(`${this.apiUr}/users/${id}`)
  }

  // Create user
  createUser(user: any) {
    return this.http.post(`${this.apiUr}/users`, user)
  }

  // Update user
  updateUser(id: string, user: any) {
    return this.http.put(`${this.apiUr}/users/${id}`, user)
  }
}
