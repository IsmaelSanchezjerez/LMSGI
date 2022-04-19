import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LibrosCreateComponent } from './libros-create/libros-create.component';
import { LibrosShowComponent } from './libros-show/libros-show.component';
import { LibrosNavComponent } from './libros-nav/libros-nav.component';

const routes: Routes = [
  { path: 'new', component: LibrosCreateComponent},
  { path: 'show', component: LibrosShowComponent},
  { path: 'sidevar', component: LibrosNavComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LibrosRoutingModule { }
