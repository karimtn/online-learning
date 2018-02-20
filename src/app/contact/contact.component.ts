import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  visible = 0;

  contactForm: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.contactForm = fb.group({
      'name': ['', Validators.required ],
      'email': ['', Validators.email, Validators.required],
      'subject': ['', Validators.required ],
      'message': ['', Validators.required ]
    })
  }

  ngOnInit() {
  }

  onClickContact(){
    this.visible = 1;
  }
}
