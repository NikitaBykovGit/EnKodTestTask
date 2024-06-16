import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core'
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { EntityActions } from '@datorama/akita';

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
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private cityService: CityService,
    private cityQuery: CityQuery
  ){
    this.matIconRegistry.addSvgIcon(
      'Selected',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svg/fstar.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'NotSelected',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svg/star.svg')
    )
    this.matIconRegistry.addSvgIcon(
      'Delete',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svg/del.svg')
    )
    this.matIconRegistry.addSvgIcon(
      'Edit',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svg/edit.svg')
    )
  }

  ngOnInit() {
    this.titleEvent.emit('Список городов');
    this.citys$ = this.cityQuery.selectCitys$;
  }

  addToFavorite(id:number) {
    this.cityService.changeFavorite(id, true);
  }

  delFromFavorite(id:number) {
    this.cityService.changeFavorite(id, false);
  }

}
