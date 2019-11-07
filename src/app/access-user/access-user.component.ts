import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-access-user',
  templateUrl: './access-user.component.html',
  styleUrls: ['./access-user.component.css']
})
export class AccessUserComponent implements OnInit {
  users: any[] = [];
  constructor(private user: AdminServiceService, private router: Router) {
    this.getData();
  }
  getData() {

    this.user.getUser().subscribe(res => {
      this.users = res.user;
      console.log(this.users)
    })
  }
  update(data) {
    console.log(data)
    this.user.selectedUser = data;
    this.router.navigateByUrl("/adduser")
  }
  ngOnInit() {

  }
  delete(user) {
    console.log(user);
    this.user.deleteUser(user).subscribe(res => {
      this.getData();
    })
  }
  signout() {
    this.router.navigateByUrl('/login')
  }
}
