import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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

const routes: Routes = [
  {
    path:'addcourses',
    component:AddcourseComponent
  },
  {
    path:'comment',
    component:CommentComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'courses',
    component:CoursesComponent
  },
  {
    path:'dashbord',
    component:DashbordComponent
  },
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'menu',
    component:MenuComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'search',
    component:SearchComponent
  },
  {
    path:'users',
    component:UsersComponent
  },
  {
    path:'viewcourses',
    component:ViewcourseComponent
  }
];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  