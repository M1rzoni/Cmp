import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashbord-status',
  standalone: true,
  imports: [],
  templateUrl: './dashbord-status.component.html',
  styleUrl: './dashbord-status.component.css',
})
export class DashbordStatusComponent {
  currentStatus = 'offline';
}
