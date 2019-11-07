import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminServiceService {
  url: string = 'http://localhost:8080/user/user';
  url1: string = 'http://localhost:8080/send/send';
  selectedUser: any = {
    id: null,
    name: null,
    email: null,
    role: null,
    password: null,
    phno: null,
  };
  constructor(private http: HttpClient) { }

  postData(data) {
    return this.http.post(`${this.url}`, data);
  }
  postUSer(data) {
    return this.http.post(`${this.url}`, data);
  }
  updateUSer(data) {
    return this.http.put(`${this.url}`, data);
  }
  loginData(data) {
    return this.http.post(`${this.url}/${data.email}/${data.password}`, data);
  }
  passworChange(data) {
    return this.http.put(`${this.url}/${data.email}/${data.password}`, data);
  }
  sendMail(data) {
    return this.http.post(`${this.url1}`, data);
  }
  getUser() {
    return this.http.get<any>(`${this.url}`)
  }
  deleteUser(user) {
    return this.http.delete(`${this.url}/${user.id}`);
  }
  searchUser(data){
    return this.http.get<any>(`${this.url}/${data.name}`);
  }
}
