import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-second-component',
  standalone: true,
  imports: [],
  templateUrl: './second-component.component.html',
  styleUrl: './second-component.component.css'
})
export class SecondComponentComponent {

  constructor(private location: Location) {

  }

  goBack(): void {
    this.location.back();
  }
}
