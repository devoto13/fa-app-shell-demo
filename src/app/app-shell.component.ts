import { Component } from '@angular/core';
import { faSun } from '@fortawesome/fontawesome-free-regular';

@Component({
  selector: 'app-shell',
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.css']
})
export class AppShellComponent {
  spinner = faSun;
}
