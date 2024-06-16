import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Injectable } from '@angular/core';

import { ICity } from '../models/city'

export interface CityState extends EntityState<ICity, number> { }

@Injectable({
  providedIn: 'root'
})
@StoreConfig({ name: 'citys' })
export class CityStore extends EntityStore<CityState> {
  constructor() {
    super() ;
  }
}
