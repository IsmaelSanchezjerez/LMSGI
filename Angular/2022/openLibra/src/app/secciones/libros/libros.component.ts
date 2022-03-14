import { Component, OnInit } from '@angular/core';
import { ICategoria, ILibro } from 'src/app/interfaces/Libros';
import { LibrosService } from 'src/app/services/libros.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.scss']
})
export class LibrosComponent implements OnInit {
  categorias: ICategoria[] | null  = null;
  libros: ILibro[] = [{}]

  constructor(private librosService: LibrosService) { }

  async ngOnInit() {
    this.categorias = await this.librosService.getCategorias();
    console.log(this.categorias)
  }

  async getLibros(categoria: number){
    console.log(categoria);
    this.libros = await this.librosService.getLibrosCategoria(categoria);
    console.log(this.libros);
  }
}
