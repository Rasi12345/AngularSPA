import { Component } from '@angular/core';
import { WorldCityDataService } from './world-city-data.service';
import { Observable } from 'rxjs';
import { City } from './city.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  cities$!: Observable<City[]>;
  loadedRowsCount = 10;
  selectedCity!: City;

  constructor(private cityService: WorldCityDataService) {
    this.cities$ =  this.cityService.getCities();
  }

  selectCity(city: City) {
    this.selectedCity = city; // Set the selectedCity to the clicked city object
  }

  loadMore() {
    this.loadedRowsCount += 10; // Increase the loadedRowsCount to load the next batch of rows
  }
}
