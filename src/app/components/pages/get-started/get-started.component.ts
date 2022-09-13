import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-started',
  templateUrl: './get-started.component.html',
  styleUrls: ['./get-started.component.scss']
})
export class GetStartedComponent implements OnInit {
  title = 'Get Started Page';
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

  constructor() { }

  ngOnInit(): void {
  }

  buttonClicked(): void {
    alert('Button clicked!');
  }

  toggleButtonStatus(): void {
    this.buttonDisabled = !this.buttonDisabled;
  }


}
