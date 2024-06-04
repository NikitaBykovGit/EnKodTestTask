import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {

  @Output() titleEvent = new EventEmitter<string>();

  ngOnInit() {
    this.titleEvent.emit('Создать город');
  }
}
