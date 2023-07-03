import { TestBed } from '@angular/core/testing';

import { WorldCityDataService } from './world-city-data.service';

describe('WorldCityDataServiceService', () => {
  let service: WorldCityDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorldCityDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
