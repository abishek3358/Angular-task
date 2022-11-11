import { Component, OnInit } from '@angular/core';
import { LoginserviceService } from '../loginservice.service';
import { first } from 'rxjs';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  logForm!: FormGroup;
  token: any;
  validation: boolean = false;
  errmsg: any;
  err: any;

  constructor(
    private loginService: LoginserviceService,
    private fb: FormBuilder,
    private route: Router
  ) { }

  ngOnInit(): void {
    localStorage.clear();
    this.logForm = this.fb.group({
      userName: [null, Validators.required],
      password: [null, Validators.required]
    })
  }
  get f() {
    return this.logForm.controls;
  }


  loginForm() {
    this.validation = true;
    if (this.logForm.invalid) {
      return;
    }
    this.loginService.loginForm(this.logForm.value).pipe(first()).subscribe(
      res => {
      localStorage.setItem('data', res.data.jwt);
        this.logForm.reset();
        this.route.navigate(['/home']);
    }
      , err => {
        console.log(err.error.error.message);
        if (err) {
          this.errmsg = err.error.error.message;
        }

      });


  }


}
