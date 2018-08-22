import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login03',
  templateUrl: './login03.component.html',
  styleUrls: ['./login03.component.css']
})
export class Login03Component implements OnInit {

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
