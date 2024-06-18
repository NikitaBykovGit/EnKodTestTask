import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs';

import { ICity } from '../models/city'
import { CityStore } from './city.store';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(
    private cityStore: CityStore,
    private http: HttpClient
  ) {}

  changeFavorite(id: number, val: boolean) {
    this.http.patch(`/api/cities/${id}`, {favorite: val}).subscribe({next:(data:any) => {
      this.cityStore.update(id, {favorite: val})
    }});
  }

  addCity(name: string, description: string, url: string) {
    let newCity = {
      image: url,
      name: name,
      description: description,
      favorite: false
    }
    this.http.post("/api/cities", newCity).subscribe({next:(data:any) => {
      this.cityStore.add(data)
    }});
  }

  deleteCity(id: number) {
    this.http.delete(`/api/cities/${id}`).subscribe({next:(data:any) => {
      this.cityStore.remove(id)
    }});
  }

  editCity(id: number, name: string, description: string, url: string) {
    let data = {name: name, description: description, url: url};
    this.http.patch(`/api/cities/${id}`, data).subscribe({next:(data:any) => {
      this.cityStore.update(id, data)
    }});
  }

  fetchCity(id: number): Observable<ICity> {
    return <Observable<ICity>> this.http.get(`/api/cities/${id}`);
  }

  fetchCitys() {
    this.http.get("/api/cities").subscribe({next:(data:any) => {
      this.cityStore.add(data)
    }});
  }
}
