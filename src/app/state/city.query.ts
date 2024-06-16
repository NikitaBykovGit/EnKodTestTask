import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';

import { CityState, CityStore } from './city.store';
import { ICity } from '../models/city';

@Injectable({
  providedIn: 'root'
})
export class CityQuery extends QueryEntity<CityState> {

  citys: ICity[] = this.getAll();
  selectCitys$ = this.selectAll();

  constructor(protected store: CityStore) {
    super(store);
  }

}
