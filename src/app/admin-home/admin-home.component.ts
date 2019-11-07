import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  constructor(private router: Router, private user: AdminServiceService) { }
  selectedUser: any = {
    id: null,
    name: null,
    email: null,
    role: null,
    password: null,
    phno: null,
  };

  mj;

  ngOnInit() {
    this.selectedUser = this.user.selectedUser;
  }
  signout() {
    this.router.navigateByUrl('/login');
  }
  changePassword() {
    this.router.navigateByUrl('/change');
  }
  change(data) {
    console.log(data.value);

    this.user.passworChange(data.value).subscribe(res => {
      console.log(res);
    })

  }
  confirmchange() {
    confirm('your changed password is accepted if u press Ok')
  }

  postUser(user12) {


    console.log(user12.value)
    if (user12.value.id) {
      this.user.updateUSer(user12.value).subscribe(res => {
        console.log(res);
        console.log('updated')
      })
      this.user.sendMail(user12.value).subscribe(res1 => {
        console.log('mail sent');
        console.log(res1);
      })
      this.router.navigateByUrl('/adminhome');
    } else {
      this.user.postUSer(user12.value).subscribe(res => {
        console.log(res)
        this.mj = res.user1;
        console.log(this.mj.password)
        this.user.sendMail(this.mj).subscribe(res1 => {
          console.log('mail sent');
          console.log(res1);
        })
      })

      user12.reset();
      this.router.navigateByUrl('/adminhome');
    }
  }
}
