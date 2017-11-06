import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  keywordForm:any;
  results:any;
  valid:boolean;
  error:boolean;

  constructor(
    private http: Http
  ) {
      this.valid = true;
  }

  ngOnInit() {

}


  logForm(value: any) {

    if(value.invalid){ // si el formulario no es válido
      this.valid = false;
    }
    else{
      this.valid = true;
      let keyword = JSON.stringify(value.value);
      let url = 'http://localhost/webService/productos/search/'+keyword;
      this.http.get(url).map(res => res.json()).subscribe(data => {
                      if(data.error == true){
                        this.results = data;
                        this.error = true;

                      }
                      else{
                        this.results = data.results;
                        this.error = false;

                      }

              });
    }

  }

}
