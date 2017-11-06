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
  error:boolean;
  constructor(
    private http: Http

  ) {

    let url = 'https://pruebasvista.herokuapp.com/productos/popularProducts';
    this.http.get(url).map(res => res.json()).subscribe(data => {
                if(data.error == true){
                  this.productos = data;
                  this.error = true;

                }
                else{
                  this.productos = data.results;
                  this.error = false;

                }
                //console.log(data);
            });
  }

  ngOnInit() {


  }

}
