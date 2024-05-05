import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  myVariable: any = "My Variable";
  myProperty: any = "color: purple";

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