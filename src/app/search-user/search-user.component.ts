import { Component, OnInit } from '@angular/core';
import { AdminServiceService } from '../admin-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {

  constructor(private user: AdminServiceService, private router: Router) { }
  m = false;
  users: any;
  users1: any[] = [];
  ngOnInit() {
  }

  searchUser(search) {
    console.log(search.value)
    this.user.searchUser(search.value).subscribe(res => {
      console.log(res);
      this.users = res.user;
      console.log(this.users);
      this.m = true;
    })

  }
  update(data) {
    console.log(data)
    this.user.selectedUser = data;
    this.router.navigateByUrl("/adduser")
  }
  getData() {

    this.user.getUser().subscribe(res => {
      this.users1 = res.user;
      console.log(this.users1)
    })
  }
  delete(user) {
    console.log(user);
    this.user.deleteUser(user).subscribe(res => {
      this.getData();
    })
  }
}
