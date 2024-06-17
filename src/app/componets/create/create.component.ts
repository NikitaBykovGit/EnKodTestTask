import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  id: number | null;
  isSuccess: boolean;
  cityForm : FormGroup;

  constructor (
    private cityService: CityService,
    private naviService: NaviService,
    private router: Router,
    private activateRoute: ActivatedRoute
  ) {
    this.id = null;
    this.isSuccess = true;
    this.cityForm = new FormGroup({
      cityName: new FormControl<string>('', [Validators.required]),
      cityDescription: new FormControl<string>('', [Validators.required]),
      imageLink: new FormControl<string>('', [Validators.required])
    })
  }

  ngOnInit() {
    this.activateRoute.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
    });
    if (this.id === 0) {
      this.titleEvent.emit('Создать город');
    } else {
      this.titleEvent.emit('Редактировать город');
      this.cityService.fetchCity(this.id!).subscribe((data: ICity) => {
        this.cityForm.controls['cityName'].setValue(data.name);
        this.cityForm.controls['cityDescription'].setValue(data.description);
        this.cityForm.controls['imageLink'].setValue(data.image)
      })
    }
  }

  getListDisplay() {
    return this.naviService.getListDisplay();
  }

  createCity() {
    //// TODO: добавить возможность проапгрейдить город!
    if (this.cityForm.valid) {
      this.cityService.addCity(
        this.cityForm.controls['cityName'].value,
        this.cityForm.controls['cityDescription'].value,
        this.cityForm.controls['imageLink'].value
      );
      this.getListDisplay()
        ? this.router.navigate([''])
        : this.router.navigate(['tile'])
    } else {
      this.isSuccess = false;
    }
    return false
  }
}
