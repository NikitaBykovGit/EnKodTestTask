import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

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

  constructor (
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private cityService: CityService,
    private naviService: NaviService,
    private router: Router
  ) {
    this.matIconRegistry.addSvgIcon(
      'Back',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svg/undo.svg')
    )
  }

  ngOnInit() {
    this.titleEvent.emit('Создать город');
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
