import { NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, RouterModule, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-binding',
  standalone: true,
  imports: [RouterOutlet, NgFor, RouterModule, RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.css'
})
export class BindingComponent {
  myVariable: any = "My Variable";
  myProperty: any = "color: purple";
  @Input() myTwoWayVariable: string = "";

  myVariables: Array<number> = [1, 2, 3];

  myObject: Person = {
    name: "Person Name",
    age: 100
  }

  changeMyVariable(): void {
    this.myVariable = "Changed My Variable";
  }

  changeMyProperty(color: string): void {
    this.myProperty = color;
  }
}

interface Person {
  name: string;
  age: number;
}