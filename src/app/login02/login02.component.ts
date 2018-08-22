import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login02',
  templateUrl: './login02.component.html',
  styleUrls: ['./login02.component.css']
})
export class Login02Component implements OnInit {
  userForm: FormGroup;
  constructor(fb: FormBuilder) {
    this.userForm = fb.group({
      username: fb.control(''),
      password: fb.control('')
    });
  }

  ngOnInit() {
  }

  register() {
    console.log(this.userForm);
  }

}
