import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../book-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-action',
  templateUrl: './book-action.component.html',
  styleUrls: ['./book-action.component.css']
})
export class BookActionComponent implements OnInit {
  users: any[] = [];
  constructor(private book: BookServiceService, private router: Router) { }

  ngOnInit() {
    this.getBook();
  }
  getBook() {
    this.book.getrequestBook().subscribe(res => {

      this.users = res;
      console.log(this.users)
    })
  }
  delete(book1) {
    this.book.deleteRequestBook(book1).subscribe(res => {
      console.log(res)
      this.getBook();
    })
  }
  accept(book1) {
    this.book.allocateBook(book1).subscribe(res => {
      console.log(res)
      this.getBook();
    })

  }
  signout() {
    this.router.navigateByUrl('/login');
  }
}
