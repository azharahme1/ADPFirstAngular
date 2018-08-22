import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login01',
  templateUrl: './login01.component.html',
  styleUrls: ['./login01.component.css']
})
export class Login01Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  register(user) {
    console.log(user);
  }

}
