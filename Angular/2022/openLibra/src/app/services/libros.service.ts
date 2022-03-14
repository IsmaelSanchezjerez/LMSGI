import { ICategoria, ILibro } from './../interfaces/Libros';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  private api = 'https://www.etnassoft.com/api/v1/get'; //parte fija de la URL a la API
  private  httpOptions = {
    headers: new HttpHeaders({
      'Accept' : 'application/json',
    }),
    params: new HttpParams()
  };
  constructor(private http: HttpClient) {

  }
  getLibrosCategoria(idCat:number): Promise<ILibro[]>{
    const url = `${this.api}`;
    const params = new HttpParams()
      .set ('category_id', idCat);
    this.httpOptions.params = params;
    return new Promise (resolve => {
      this.http.get<ILibro[]>(url, this.httpOptions)
        .subscribe(data =>{
          console.log(data);
          resolve(data);
        })
    })
  }

  getCategorias(): Promise<ICategoria[]>{
    const url = `${this.api}`;
    const params = new HttpParams()
      .set ('get_categories', 'all');
    this.httpOptions.params = params;
    return new Promise (resolve => {
      this.http.get<ICategoria[]>(url, this.httpOptions)
        .subscribe(data => {
          console.log(data);
          resolve(data)
        })
    })
  }
}
