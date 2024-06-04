import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrl: './tile.component.css'
})
export class TileComponent {

  @Output() titleEvent = new EventEmitter<string>();

  ngOnInit() {
    this.titleEvent.emit('Список городов');
  }
}
