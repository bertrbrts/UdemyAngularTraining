import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  userName = '';
  buttonDisabled = true;

  ngOnInit(): void {
  }

  onUpdateUsername(event: any){
    this.buttonDisabled = (<HTMLInputElement>event.target).value === '';
  }

  onButtonClick(){
    this.userName = '';
    this.buttonDisabled = true;
  }
}
