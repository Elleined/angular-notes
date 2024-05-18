import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FirstServiceService } from './services/first-service.service';
import { NgIcon, NgIconsModule } from '@ng-icons/core';
import axios from 'axios';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, RouterModule, RouterLink, RouterLinkActive, FormsModule, 
  
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private myFirstService: FirstServiceService) {
  }
  ngOnInit(): void {
    this.myFirstService.shouldWork();
  
  }

  goToBindings() {
    this.router.navigate(['/bindings']);
  }

  goToForms() {
    this.router.navigate(['/forms']);
  }

  goToRoutings() {
    this.router.navigate(['/routings']);
  }

  tryAxios() {
    axios.get("/api/users", {
      params: 1
    });
  }
}