import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm: FormGroup;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.userForm = fb.group(
      {
        'email': ['', [Validators.email, Validators.required]],
        'password': ['', Validators.minLength(8)]
      }
    );
  }

  errMessage;

  ngOnInit() {
  }

  onClickLogin(login) {
    this.authService.login(this.userForm.value)
      .subscribe((res) => {
        console.log(res);
        if (res === true) {
          this.router.navigate(['/']);
        } else {
          this.errMessage = res;
        }
      });
return false;
  }
}
