import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core'
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { CityService } from '../../state/city.service';
import { CityQuery } from '../../state/city.query';
import { ICity } from '../../models/city';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})

export class ListComponent {
  citys$: Observable<ICity[]>;

  @Output() titleEvent = new EventEmitter<string>();

  constructor(
    private cityService: CityService,
    private cityQuery: CityQuery,
    private router: Router
  ){}

  ngOnInit() {
    this.titleEvent.emit('Список городов');
    this.citys$ = this.cityQuery.selectCitys$;
  }

  addToFavorite(id: number) {
    this.cityService.changeFavorite(id, true);
  }

  delFromFavorite(id: number) {
    this.cityService.changeFavorite(id, false);
  }

  deleteCity(id: number) {
    this.cityService.deleteCity(id);
  }

  navigateToEditForm(id: number) {
    this.router.navigate([`edit/${id}`])
  }
}
