import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core'

import { CityService } from "../../services/city.service"
import { ICity } from "../../models/city"

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})

export class ListComponent {
  citys:ICity[];

  @Output() titleEvent = new EventEmitter<string>();

  constructor(private cityService: CityService){
    this.citys = cityService.getCitys();
  }

  ngOnInit() {
    this.titleEvent.emit('Список городов');
  }

}
