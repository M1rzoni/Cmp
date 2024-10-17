import { Component } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket.component';

@Component({
  selector: 'app-dashbord-support',
  standalone: true,
  imports: [NewTicketComponent],
  templateUrl: './dashbord-support.component.html',
  styleUrl: './dashbord-support.component.css',
})
export class DashbordSupportComponent {}
