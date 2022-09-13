import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  date = new Date();
  imgUrl = 'https://picsum.photos/200';
  imgDesc = 'Description';
  buttonDisabled = false;
  iconBgColor = '#000';

  words = [
    'hello',
    'world',
    '!'
  ]


  buttonClicked(): void {
    alert('Button clicked!');
  }

  toggleButtonStatus(): void {
    this.buttonDisabled = !this.buttonDisabled;
  }
}
