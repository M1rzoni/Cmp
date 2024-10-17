import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dashbord-traffic',
  standalone: true,
  imports: [],
  templateUrl: './dashbord-traffic.component.html',
  styleUrl: './dashbord-traffic.component.css',
})
export class DashbordTrafficComponent {
  dummyTrafficData = [
    {
      id: 'd1',
      value: 433,
    },
    {
      id: 'd2',
      value: 260,
    },
    {
      id: 'd3',
      value: 290,
    },
    {
      id: 'd4',
      value: 410,
    },
    {
      id: 'd5',
      value: 397,
    },
    {
      id: 'd6',
      value: 488,
    },
    {
      id: 'd47',
      value: 589,
    },
  ];
  maxTraffic = Math.max(...this.dummyTrafficData.map((data) => data.value));
}
