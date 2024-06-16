import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TileComponent } from './componets/tile/tile.component';
import { ListComponent } from './componets/list/list.component';
import { CreateComponent } from './componets/create/create.component';
import { NavigatorComponent } from './componets/navigator/navigator.component';

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'list'
  },
  {
    path: 'list',
    component:ListComponent
  },
  {
    path: 'tile',
    component:TileComponent
  },
  {
    path: 'create',
    component:CreateComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    TileComponent,
    ListComponent,
    CreateComponent,
    NavigatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    MatIconModule,
    HttpClientModule,
    CommonModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
