import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core'

import { ICity } from '../models/city'
import { CityStore } from "./city.store";

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(
    private cityStore: CityStore,
    private http: HttpClient
  ) {}

  changeFavorite(id:number, val:boolean) {
    this.http.patch(`/api/cities/${id}`, {favorite: val}).subscribe({next:(data:any) => {
      this.cityStore.update(id, {favorite: val})
    }});
  }

  addCity(name:string, description:string, url:string) {
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

  fetchCitys() {
    this.http.get("/api/cities").subscribe({next:(data:any) => {
      this.cityStore.add(data)
    }});
  }
}
