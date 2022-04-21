import { Component, OnInit } from '@angular/core';
import { ICategoria } from 'src/app/interfaces/ILibros';
import { LibrosService } from 'src/app/services/libros.service';

@Component({
  selector: 'app-libros-nav',
  templateUrl: './libros-nav.component.html',
  styleUrls: ['./libros-nav.component.css']
})
export class LibrosNavComponent implements OnInit {
  categorias: ICategoria[] = [];
  constructor(private librosService: LibrosService) { }

  async ngOnInit(){
    this.categorias = await this.librosService.getCategorias();
    console.log(this.categorias);
  }

}
