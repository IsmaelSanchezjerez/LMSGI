import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { EstructuraRoutingModule } from './estructura-routing.module';
import { MainMenuComponent } from './main/main-menu/main-menu.component';
import { MainCuerpoComponent } from './main/main-cuerpo/main-cuerpo.component';


@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent,
    MainMenuComponent,
    MainCuerpoComponent
  ],
  imports: [
    CommonModule,
    EstructuraRoutingModule
  ],
  exports: [
    HeaderComponent,
    MainComponent
  ]
})
export class EstructuraModule { }
