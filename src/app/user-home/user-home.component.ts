import { Component, OnInit } from '@angular/core';
import { BookServiceService } from '../book-service.service';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  users: any[] = [];
  users1: any[] = [];
  constructor(public book: BookServiceService, private router: Router,private user: AdminServiceService) {
    this.getAllocated();

  }
  value = false;
  value1 = false;
  value2 = false;
  ngOnInit() {
    console.log(this.book.id)
  }
  view(){
    this.value2=true;
    this.value=false;
  }
  viewBook() {
    this.value = true;
    this.value1 = false;
    this.value2=false;
    this.getData();
  }
  getData() {
    this.book.getBook().subscribe(res => {
      this.users = res;
      console.log(this.users)
    })
  }
  searchBook() {
    this.value = false;
    this.value1 = true;
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
  getAllocated() {
    this.book.getAllocatedBook().subscribe(res => {

      this.users1 = res;
      console.log(this.users1)
    })
  }
  return(book1) {
    this.book.postBook(book1).subscribe(res => {
      console.log(res);
      this.router.navigateByUrl('/userhome')
      this.getAllocated();
    }, err => {
      console.log(err);
    }, () => {
      console.log('successfully returned')
    })
  }
  signout() {
    this.router.navigateByUrl('/login');
  }
  changePassword() {
    this.router.navigateByUrl('/change');
  }
  confirmchange(){
    confirm('change password is accepted if u press Ok')
  }
  change(data) {
    console.log(data.value);
    
    this.user.passworChange(data.value).subscribe(res => {
      console.log(res);
    })
  
  }
}
