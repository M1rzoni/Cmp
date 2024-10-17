import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { DashbordStatusComponent } from './dashbord/dashbord-status/dashbord-status.component';
import { DashbordTrafficComponent } from './dashbord/dashbord-traffic/dashbord-traffic.component';
import { DashbordSupportComponent } from './dashbord/dashbord-support/dashbord-support.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    DashbordStatusComponent,
    DashbordTrafficComponent,
    DashbordSupportComponent,
  ],
})
export class AppComponent {}
