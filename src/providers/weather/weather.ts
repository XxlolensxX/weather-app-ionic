import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherProvider {
  apiKey = '39c6b725ab948921f0e36eb928f419d0';
  url;

  constructor(public http: HttpClient) {
    console.log('Hello WeatherProvider Provider');
    this.url = `http://api.openweathermap.org/data/2.5/weather`;

  }
  
  getWeather(city) {
    return this.http.get( `${this.url}?q=${city}&appid=${this.apiKey}` )
      .map( res => res )
  }

}
