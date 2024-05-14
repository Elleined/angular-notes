import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-mycomponent',
  standalone: true,
  imports: [],
  templateUrl: './mycomponent.component.html',
  styleUrl: './mycomponent.component.css'
})
export class MycomponentComponent {

  constructor(private _location: Location) {

  }

  goBack() {
    this._location.back();
  }
}