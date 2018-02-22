import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

@Injectable()
export class ContactService {

  constructor(private http: Http) { }

  contactus(contactData) {
    return this.http.post('http://localhost:3000/api/contact', contactData)
    .map((res) => {
      if (res.json().message === 'ok') {
        return true;
      } else {
        return res.json().message;
      }
    });
  }
  
}
