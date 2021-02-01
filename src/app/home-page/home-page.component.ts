import { SingletonService } from './../singleton.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  cityDetails: any = [];
  cities = ['London','Paris','Moscow','Berlin','Tokyo'];
  constructor(private  http: HttpClient, private service:SingletonService) { }

  ngOnInit(): void {
    this.cities.forEach(city => {
      setTimeout(() => {
      this.getWeatherDetails(city);
      }, 100);
    })
   
  }
  inputData(data) {
  //  this.service.setData(this.cityDetails[data]);
  this.getSeaLevel(data);
   
  }
  getSeaLevel(cityName) {
    this.http.get('http://api.openweathermap.org/data/2.5/forecast?q='+cityName+'&appid=1941672f1c9259315680f63ea0f7f54b').subscribe(res=>{
      if(res) {
        res['city'] = cityName;
        this.service.setData(res);
      }
    })
  }
  getWeatherDetails(str) {
    this.http.get('http://api.openweathermap.org/data/2.5/weather?q='+str+'&appid=1941672f1c9259315680f63ea0f7f54b').subscribe(res =>{
    if(res) {
    this.cityDetails[str]= res;
    }
    });
  }
}
