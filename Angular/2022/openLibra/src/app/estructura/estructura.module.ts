import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { EstructuraRoutingModule } from './estructura-routing.module';


@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent
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
