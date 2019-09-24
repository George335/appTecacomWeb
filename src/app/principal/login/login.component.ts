import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  form:FormGroup;
  

  constructor() { 
    this.form = new FormGroup ({
      userName: new FormControl('',[Validators.required,Validators.maxLength(20)]),
      password: new FormControl('',[Validators.required,Validators.maxLength(8)]),
      captchaCode: new FormControl('',[Validators.required,Validators.maxLength(4)])
    });
  }

  ngOnInit() {
  }

  login(){
    
  }


  isValid(){
    if (!environment.production){
      return true;
    }
    return this.form.valid;
  }

}
