import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  inject,
  DestroyRef,
} from '@angular/core';

@Component({
  selector: 'app-dashbord-status',
  standalone: true,
  imports: [],
  templateUrl: './dashbord-status.component.html',
  styleUrl: './dashbord-status.component.css',
})
export class DashbordStatusComponent implements OnInit {
  currentStatus: 'online' | 'offline' | 'unknown' = 'offline';

  private destroyRef = inject(DestroyRef);

  constructor() {}

  ngOnInit() {
    const interval = setInterval(() => {
      const random = Math.random(); // 0-0.9999

      if (random < 0.5) {
        this.currentStatus = 'online';
      } else if (random < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }
    }, 5000);

    this.destroyRef.onDestroy(() => {
      clearInterval(interval);
    });
  }

  // ngOnDestroy(): void {
  //   clearTimeout(this.interval);
  // }
}
