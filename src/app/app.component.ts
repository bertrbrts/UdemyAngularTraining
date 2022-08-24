import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayPassword = false;
  clicks = [];

  displayClick(){
    this.displayPassword = !this.displayPassword;
    this.clicks.push(this.clicks.length + 1 + ': ' + new Date().toISOString())
  }
}
