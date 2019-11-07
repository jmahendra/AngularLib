import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-lib-home',
  templateUrl: './lib-home.component.html',
  styleUrls: ['./lib-home.component.css']
})
export class LibHomeComponent implements OnInit {

  constructor(private router: Router,public admin: AdminServiceService) { }

  ngOnInit() {
  }

  signout() {
    this.router.navigateByUrl('/login');
  }
  change(form) {
    console.log(form.value);
    this.admin.passworChange(form.value).subscribe(res => {
      console.log(res);
      
    })
  }
  show(){
    this.router.navigateByUrl('/actionbook')
  }
  changePassword() {
    this.router.navigateByUrl('/change');
  }
  
}
