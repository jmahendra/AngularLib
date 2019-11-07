import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../book-service.service';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})
export class SearchBookComponent implements OnInit {

  constructor(public book: BookServiceService) { }
array:any;
value=false;
  ngOnInit() {
  }
  getSearch(search) {
    console.log(search);
    this.book.getBook1(search.value).subscribe(res => {
      this.array=res.book;
      console.log(res);
      this.value=true;
    })
  }
  request(book1) {
    this.book.requestBook(book1).subscribe(res => {
      console.log(res);
    }, err => {
      console.log(err);
    }, () => {
      console.log('request sent successfully..');
    })
  }
}
