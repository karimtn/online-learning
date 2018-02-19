import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesService } from './courses.service';
import { HttpClient } from 'selenium-webdriver/http';
import { AddcoursesComponent } from './addcourses/addcourses.component';
import { CommentsComponent } from './comments/comments.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CoursesComponent } from './courses/courses.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';
import { UsersComponent } from './users/users.component';
import { ViewcoursesComponent } from './viewcourses/viewcourses.component';


@NgModule({
  declarations: [
    AppComponent,
    AddcoursesComponent,
    CommentsComponent,
    ContactusComponent,
    CoursesComponent,
    DashbordComponent,
    HomeComponent,
    LoginComponent,
    MenuComponent,
    RegisterComponent,
    SearchComponent,
    UsersComponent,
    ViewcoursesComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpModule

  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
