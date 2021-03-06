import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { WeatherProvider } from '../../providers/weather/weather'; 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  city: string;

  constructor( public navCtrl: NavController, private weatherProvider: WeatherProvider ) {

  }

  ionViewWillEnter(){
    this.city = 'santiago';

    this.weatherProvider.getWeather(this.city)
      .subscribe( data => {
        console.log(data);
      });
  }

}
