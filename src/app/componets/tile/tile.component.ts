import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { CityService } from "../../services/city.service"
import { ICity } from "../../models/city"

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrl: './tile.component.css'
})

export class TileComponent {
  citys:ICity[];

  @Output() titleEvent = new EventEmitter<string>();

  constructor(private cityService: CityService){
    this.citys = cityService.getCitys();
  }

  ngOnInit() {
    this.titleEvent.emit('Список городов');
  }
}
