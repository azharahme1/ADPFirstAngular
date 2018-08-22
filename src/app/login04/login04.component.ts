import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login04',
  templateUrl: './login04.component.html',
  styleUrls: ['./login04.component.css']
})
export class Login04Component implements OnInit {

  userForm: FormGroup;
  usernameCtrl: FormControl;
  passwordCtrl: FormControl;
  constructor(fb: FormBuilder) {
    this.usernameCtrl = fb.control('', Validators.required);
    this.passwordCtrl = fb.control('', Validators.required);
    this.userForm = fb.group({
      username: this.usernameCtrl,
      password: this.passwordCtrl
    });
  }
  register() {
    console.log(this.userForm.value);
  }
  ngOnInit() {
  }

}
