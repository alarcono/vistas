import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-estadisticas',
  templateUrl: './estadisticas.component.html',
  styleUrls: ['./estadisticas.component.css']
})
export class EstadisticasComponent implements OnInit {

  productos:any;
  constructor(
    private http: Http

  ) {

    let url = 'http://localhost/webService/productos/popularProducts';
    this.http.get(url).map(res => res.json()).subscribe(data => {
                this.productos = data;
                console.log(data);
            });
  }

  ngOnInit() {


  }

}
