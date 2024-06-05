import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

import {CityService} from "../../services/city.service"
import {ICity} from "../../models/city"

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

  @Output() titleEvent = new EventEmitter<string>();

  constructor (
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private cityService: CityService
  ) {
    this.matIconRegistry.addSvgIcon(
      'Back',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svg/undo.svg')
    )
  }

  ngOnInit() {
    this.titleEvent.emit('Создать город');
  }

  createCity(name:string, description:string, url:string) {
    this.cityService.addCity(name, description, url);
    return false
  }
}
