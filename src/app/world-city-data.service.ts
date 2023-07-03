import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class WorldCityDataService {
  private apiUrl = 'https://datahub.io/core/world-cities/r/world-cities.json';

  constructor(private http: HttpClient) { }

  getCities(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}

