import { Component, OnInit, ChangeDetectorRef, AfterContentChecked } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

import { CityService } from './state/city.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {

  title:string;
  name:string;

  constructor(
    private cdref: ChangeDetectorRef,
    private cityService: CityService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'Selected',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svg/fstar.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'NotSelected',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svg/star.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'Delete',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svg/del.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'Edit',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svg/edit.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'Back',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svg/undo.svg')
    )
  }

  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }

  ngOnInit() {
    this.title = 'EnKodTestTask';
    this.name = '';
    this.cityService.fetchCitys()
  }

  getTitle(elementRef:any) {
    elementRef.titleEvent.subscribe((event: string) => {
        this.name = event;
    })
  }


}
