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

  myVariables: Array<number> = [1, 2, 3];

  myObject: Person = {
    name: "Person Name",
    age: 100
  }
}

interface Person {
  name: string;
  age: number;
}