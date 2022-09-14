import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService, Credentials } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    pwd: new FormControl('', [Validators.required]),
  });

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  login() {
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value);
  }

  checkEmailAvailable() {
  }

}
