import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demoform',
  templateUrl: './demoform.component.html',
  styleUrls: [
    './demoform.component.css',
    '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
  ]
})
export class DemoformComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: any): void {
    console.log('you submitted value:', form);
  }
}
