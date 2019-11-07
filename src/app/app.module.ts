import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AccessUserComponent } from './access-user/access-user.component';
import { UserHomeComponent } from './user-home/user-home.component';
import { LibHomeComponent } from './lib-home/lib-home.component';
import { AddBookComponent } from './add-book/add-book.component';
import { ViewBookComponent } from './view-book/view-book.component';
import { BookActionComponent } from './book-action/book-action.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { SearchBookComponent } from './search-book/search-book.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    AdminLoginComponent,
    AdminHomeComponent,
    AddUserComponent,
    AccessUserComponent,
    UserHomeComponent,
    LibHomeComponent,
    AddBookComponent,
    ViewBookComponent,
    BookActionComponent,
    ChangePasswordComponent,
    SearchUserComponent,
    SearchBookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'login', component: AdminLoginComponent },
      { path: 'adminhome', component: AdminHomeComponent },
      { path: 'adduser', component: AddUserComponent },
      { path: 'getdata', component: AccessUserComponent },
      { path: 'userhome', component: UserHomeComponent },
      { path: 'libhome', component: LibHomeComponent },
      { path: 'addbook', component: AddBookComponent },
      { path: 'viewbook', component: ViewBookComponent },
      { path: 'actionbook', component: BookActionComponent },
      { path: 'change', component: ChangePasswordComponent },
      { path: 'searchuser', component: SearchUserComponent },
      { path: 'searchbook', component: SearchBookComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
