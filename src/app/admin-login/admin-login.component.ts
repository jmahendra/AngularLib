import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
import { Router } from '@angular/router';
import { BookServiceService } from '../book-service.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  constructor(public adminservice: AdminServiceService, private router: Router, private book: BookServiceService) { }

  ngOnInit() {
      document.body.classList.add('bg-img');
  }
  user;
  loginUser(form) {
    console.log(form.value);
    this.adminservice.loginData(form.value).subscribe(res => {
      console.log(res);
      this.user = res.user1;
      this.book.id = this.user.id;
      this.book.userO = this.user;
      console.log(this.user.role);
      console.log(this.book.id);
      if (this.user.role === 'admin') {
        this.router.navigateByUrl("/adminhome");
      } else if (this.user.role === 'user') {
        this.router.navigateByUrl("/userhome");
      } else if (this.user.role === 'librarian') {
        this.router.navigateByUrl("/libhome");
      }
      else {
        this.router.navigateByUrl("/login");
      }
    })
  }
  forgot() {
    this.router.navigateByUrl("/change");
  }
  change(form) {
    console.log(form.value);
    this.adminservice.passworChange(form.value).subscribe(res => {
      console.log(res);
      
    })
  }
}