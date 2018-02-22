import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {

    this.registerForm = fb.group(
      {
        'email': ['', [Validators.email, Validators.required]],
        'name': ['', Validators.required ],
        'lastname': ['' , Validators.required],
        'pass': ['', Validators.minLength(8)],
      }
    );
  }

  ngOnInit() {
    const hide = true;
  }

  onClickRegister(register) {
    this.authService.register(this.registerForm.value)
      .subscribe((res) => {
        if (res === true) {
          this.router.navigateByUrl('');
        }
      });
      return false;
  }

}
