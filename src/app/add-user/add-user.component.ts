import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor(public user: AdminServiceService, private router: Router) { }
  selectedUser: any = {
    id: null,
    name: null,
    email: null,
    role: null,
    password: null,
    phno: null,
  };
  ngOnInit() {
    this.selectedUser = this.user.selectedUser;
  }
  mj;
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
        this.mj=res.user1;
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
  signout() {
    this.router.navigateByUrl('/login')
  }
}
// addUser(user1){
//   console.log(user1.value)


// }
