import { Component, OnInit } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';
import { MyserviceService } from './services/myservice.service';
import { routes } from './app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  myVariable: any = "My Variable";
  myProperty: any = "color: purple";

  constructor(private myService: MyserviceService) {

  }

  ngOnInit(): void {
    this.myService.iShouldWork();
  }

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