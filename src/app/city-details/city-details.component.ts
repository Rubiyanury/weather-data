import { SingletonService } from './../singleton.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-city-details',
  templateUrl: './city-details.component.html',
  styleUrls: ['./city-details.component.css']
})
export class CityDetailsComponent implements OnInit {
details: any;
city: string;
  constructor(private service: SingletonService) { 
  }

  ngOnInit(): void {
    this.service.getData.subscribe(res => {
      this.city = res['city'];
      this.details = res['list'];
    })
  }

}
