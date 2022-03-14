import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriasComponent } from './categorias/categorias.component';
import { LibrosComponent } from './libros/libros.component';
import { AutoresComponent } from './autores/autores.component';

const routes: Routes = [
  { path: '', component: LibrosComponent },
  { path: 'categorias', component: CategoriasComponent },
  { path: 'autores', component: AutoresComponent }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeccionesRoutingModule { }
