import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NaviService {
  private listDisplay: boolean = true;

  constructor() {}

  getListDisplay(): boolean {
    return this.listDisplay;
  }

  setListDisplay() {
    this.listDisplay = true;
  }

  setTileDisplay() {
    this.listDisplay = false;
  }
}
