import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  results:any;

  constructor(
    private http: Http
  ) { }

  ngOnInit() {
  }

  logForm(value: any) {
    console.log(value);
    let keyword = JSON.stringify(value);
    let url = 'http://localhost/webService/productos/search/'+keyword;
    this.http.get(url).map(res => res.json()).subscribe(data => {
                this.results = data;
                console.log(data);

            });
  }

}
