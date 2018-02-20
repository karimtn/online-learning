import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  hide = true;

  registerForm: FormGroup;
  constructor(private fb: FormBuilder) {

    this.registerForm = fb.group(
      {
        'email': ['', [Validators.email, Validators.required]],
        'firstname': ['', Validators.required ],
        'lastname': ['' , Validators.required],
        'password': ['', Validators.minLength(8)],
      }
    );
  }

  ngOnInit() {
  }

}
