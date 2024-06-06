import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core'
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

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

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private cityService: CityService
  ){
    this.citys = cityService.getCitys();
    this.matIconRegistry.addSvgIcon(
      'Selected',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svg/fstar.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'NotSelected',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svg/star.svg')
    )
  }

  ngOnInit() {
    this.titleEvent.emit('Список городов');
  }

  addToFavorite(id:number) {
    this.cityService.changeFavorite(id, true);
    this.citys = this.cityService.getCitys();
  }

  delFromFavorite(id:number) {
    this.cityService.changeFavorite(id, false);
    this.citys = this.cityService.getCitys();
  }

}
