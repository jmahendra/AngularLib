import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../book-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  selectedUser: any = {
    bId: null,
    bName: null,
    bAuthor: null,
    bCategory: null
  };

  constructor(public book: BookServiceService, private router: Router) { }

  ngOnInit() {
    this.selectedUser = this.book.selectedUser;
    console.log(this.book.selectedUser)
  }
  signout() {
    this.router.navigateByUrl('/liblogin');
  }
  addBook(book) {
    if (book.value.bId) {
      this.book.updateBook(book.value).subscribe(res => {
        console.log(res)
        console.log('book updated')
        this.router.navigateByUrl("/libhome")
      })
    } else {
      this.book.postBook(book.value).subscribe(res => {
        console.log(res)
        console.log('book posted')
        this.router.navigateByUrl("/libhome")
      })
    }
  }
}
