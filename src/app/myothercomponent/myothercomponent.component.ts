import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-myothercomponent',
  standalone: true,
  imports: [],
  templateUrl: './myothercomponent.component.html',
  styleUrl: './myothercomponent.component.css'
})
export class MyothercomponentComponent {

  constructor(private _location: Location) {

  }

  goBack() {
    this._location.back();
  }
}
