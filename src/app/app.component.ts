import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
// template: "The message is {{ greeting() }}",
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'This is my first Angular 6 App';

  greeting() {
    return 'Hello World';
  }
}
