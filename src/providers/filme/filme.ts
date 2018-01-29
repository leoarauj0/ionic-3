import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the FilmeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()                                                                   //quer dizer que sempre essa classe será usada dentro de outra que vai chama-la... essa injeção é colocada no @Component da classe que vai chamar.
export class FilmeProvider {

  private baseApiPath= "https://api.themoviedb.org/3";                          // url que sempre será usada entao cria-se uma variavel

  constructor(public http: HttpClient) {
    console.log('Hello FilmeProvider Provider');
  }

  getUltimoFilme(){                                                             // metodo que solicita informação
    return this.http.get(this.baseApiPath + "/movie/popular?api_key=b6f9cab7924d560c595cde421f9cd294");

  }



}
