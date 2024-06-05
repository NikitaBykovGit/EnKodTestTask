import { Component } from '@angular/core';
import { NaviService } from "../../services/navi.service"

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrl: './navigator.component.css'
})
export class NavigatorComponent {

  constructor(private naviService: NaviService) {}

  getListDisplay() {
    return this.naviService.getListDisplay();
  }

  setListDisplay() {
    this.naviService.setListDisplay();
  }

  setTileDisplay() {
    this.naviService.setTileDisplay();
  }
}
