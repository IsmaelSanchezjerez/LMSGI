import { Component, OnInit } from '@angular/core';
import { LibrosService } from 'src/app/services/libros.service';
import { ICategoria, ILibro } from '../../interfaces/Libros';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {
  categorias: ICategoria[] | null  = null;

  constructor(private librosService: LibrosService) { }

  async ngOnInit() {
    this.categorias = await this.librosService.getCategorias();
    console.log(this.categorias)
  }

}
