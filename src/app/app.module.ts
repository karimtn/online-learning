import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';


import { AppComponent } from './app.component';
import { CourService } from './CourService.service';
import { HttpClient } from 'selenium-webdriver/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,HttpModule

  ],
  providers: [CourService],
  bootstrap: [AppComponent]
})
export class AppModule { }
