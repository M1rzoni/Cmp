import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashbord-status',
  standalone: true,
  imports: [],
  templateUrl: './dashbord-status.component.html',
  styleUrl: './dashbord-status.component.css',
})
export class DashbordStatusComponent {
  currentStatus: 'online' | 'offline' | 'unknown' = 'offline';

  constructor() {
    setInterval(() => {
      const random = Math.random(); // 0-0.9999

      if (random < 0.5) {
        this.currentStatus = 'online';
      } else if (random < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);
  }
}
