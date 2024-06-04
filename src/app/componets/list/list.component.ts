import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import {CityService} from "../../services/city-service";
import {ICity} from "../../models/city";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
  providers: [CityService],
})
export class ListComponent {

  constructor(private cityService: CityService){}

  @Output() titleEvent = new EventEmitter<string>();

  citys:ICity[] = this.cityService.getCitys();

  ngOnInit() {
    this.titleEvent.emit('Список городов');
  }

}
