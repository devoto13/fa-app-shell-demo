import { Component } from '@angular/core';
import { faWindowMaximize } from '@fortawesome/fontawesome-free-regular';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  windowMaximize = faWindowMaximize;
}
