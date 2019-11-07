import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  url: string = 'http://localhost:8080/book/book';
  url1: string = 'http://localhost:8080/bookaction/bookaction';
  url2: string = 'http://localhost:8080/allocate/allocate';
  id;
  userO:any;
  constructor(private http: HttpClient) { }
  selectedUser: any = {
    bId: null,
    bName: null,
    bAuthor: null,
    bCategory: null
  };
  postBook(data) {
    return this.http.post(`${this.url}`, data);
  }
  updateBook(data) {
    return this.http.put(`${this.url}`, data);
  }
  getBook() {
    return this.http.get<any>(`${this.url}`);
  }
  deleteBook(book) {
    return this.http.delete(`${this.url}/${book.bId}`);
  }
  getBook1(data) {
    return this.http.get(`${this.url}/${data.bName}`);
  }
  requestBook(data) {
    return this.http.post(`${this.url1}/${this.id}`, data);
  }
  getrequestBook() {
    return this.http.get<any>(`${this.url1}`);
  }
  deleteRequestBook(book) {
    return this.http.delete(`${this.url1}/${book.bId}`);
  }
  allocateBook(data) {
    return this.http.post(`${this.url2}`, data);
  }
  getAllocatedBook() {
    return this.http.get<any>(`${this.url2}/${this.id}`);
  }
}


