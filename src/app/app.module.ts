import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { CommentComponent } from './comment/comment.component';
import { ContactComponent } from './contact/contact.component';
import { CoursesComponent } from './courses/courses.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { UsersComponent } from './users/users.component';
import { ViewcourseComponent } from './viewcourse/viewcourse.component';


@NgModule({
  declarations: [
    AddcourseComponent,
    CommentComponent,
    ContactComponent,
    CoursesComponent,
    DashbordComponent,
    HomeComponent,
    LoginComponent,
    MenuComponent,
    RegisterComponent,
    SearchComponent,
    UsersComponent,
    ViewcourseComponent,
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
