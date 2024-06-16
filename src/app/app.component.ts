import { Component, OnInit, ChangeDetectorRef, AfterContentChecked } from '@angular/core';

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
    private cityService: CityService
  ) {}

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
