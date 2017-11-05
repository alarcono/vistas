import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

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
