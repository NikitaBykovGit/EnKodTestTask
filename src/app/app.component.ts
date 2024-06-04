import {Component} from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {

  title:string = 'EnKodTestTask';
  name:string = '';

  getTitle(elementRef:any) {
    elementRef.titleEvent.subscribe((event: string) => {
        this.name = event;
    })
  }
}
