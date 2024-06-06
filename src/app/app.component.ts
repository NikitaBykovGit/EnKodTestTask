import { Component, OnInit, ChangeDetectorRef, AfterContentChecked } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {

  title:string;
  name:string;

  constructor(private cdref: ChangeDetectorRef) {}

  ngAfterContentChecked() {
    this.cdref.detectChanges();
  }

  ngOnInit() {
    this.title = 'EnKodTestTask';
    this.name = '';
  }

  getTitle(elementRef:any) {
    elementRef.titleEvent.subscribe((event: string) => {
        this.name = event;
    })
  }


}
