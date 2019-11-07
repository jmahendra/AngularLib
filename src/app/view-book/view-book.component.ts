import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../book-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.css']
})
export class ViewBookComponent implements OnInit {
  users: any[] = [];
  constructor(private book: BookServiceService, private router: Router) {
    this.getData();
  }
  getData() {
    this.book.getBook().subscribe(res => {

      this.users = res;
      console.log(this.users)
    })
  }
  delete(data) {

    this.book.deleteBook(data).subscribe(res => {
      console.log(res)
      this.getData();
    })
  }
  Update(book) {
    console.log(book);
    this.book.selectedUser = book;
    this.router.navigateByUrl("/addbook");
  }
  signout() {
    this.router.navigateByUrl('/login');
  }
  ngOnInit() {

  }

}
