import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-grafica',
  templateUrl: './grafica.component.html',
  styleUrls: ['./grafica.component.css']
})
export class GraficaComponent implements OnInit {

  public lineChartData: ChartDataSets[] = [
    { data: [0, 0, 0, 0], label: 'Ventas' }
  ];
  public lineChartLabels: Label[] = ['January', 'February', 'March', 'April'];

  constructor() { }

  ngOnInit(): void {
    setInterval( () => {
      const newData = [
        Math.round( Math.random() * 100 ),
        Math.round( Math.random() * 100 ),
        Math.round( Math.random() * 100 ),
        Math.round( Math.random() * 100 )
      ];

      this.lineChartData = [
        { data: newData, label: 'Ventas' }
      ];
    }, 3000 );
  }

}
