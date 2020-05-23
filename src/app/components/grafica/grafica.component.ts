import { Component, OnInit } from '@angular/core';
import { ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';
import { HttpClient } from '@angular/common/http';
import { WebsocketService } from '../../services/websocket.service';


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

  constructor(
    private http: HttpClient,
    public wsService: WebsocketService
  ) { }

  ngOnInit(): void {
    // setInterval( () => {
    //   const newData = [
    //     Math.round( Math.random() * 100 ),
    //     Math.round( Math.random() * 100 ),
    //     Math.round( Math.random() * 100 ),
    //     Math.round( Math.random() * 100 )
    //   ];

    //   this.lineChartData = [
    //     { data: newData, label: 'Ventas' }
    //   ];
    // }, 3000 );

    this.getData();
    this.escucharSocket();

  }

  getData() {
    this.http.get('http://localhost:5000/grafica')
      .subscribe( (data: any) => {
        console.log(data);
        this.lineChartData = data;
      });
  }

  escucharSocket() {
    this.wsService.listen('cambio-grafica')
      .subscribe( (data: any) => {
        console.log('socket', data);
        this.lineChartData = data;
      });
  }

}
