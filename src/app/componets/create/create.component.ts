import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CityService } from "../../state/city.service"
import { ICity } from "../../models/city"
import { NaviService } from "../../state/navi.service"

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})

export class CreateComponent {
  @Output() titleEvent = new EventEmitter<string>();

  id: number | null = null;

  constructor (
    private cityService: CityService,
    private naviService: NaviService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
    });
    if (this.id === 0) {
      this.titleEvent.emit('Создать город');
    } else {
      this.titleEvent.emit('Редактировать город');
    }
  }

  getListDisplay() {
    return this.naviService.getListDisplay();
  }

  createCity(name:string, description:string, url:string) {
    this.cityService.addCity(name, description, url);
    this.getListDisplay()
      ? this.router.navigate([''])
      : this.router.navigate(['tile'])
    return false
  }
}
