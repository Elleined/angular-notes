import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet, RouterModule, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-routing',
  standalone: true,
  imports: [RouterOutlet, NgFor, RouterModule, RouterLink, RouterLinkActive, FormsModule],
  templateUrl: './routing.component.html',
  styleUrl: './routing.component.css'
})
export class RoutingComponent {

}
