import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FilmeProvider } from '../../providers/filme/filme';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    FilmeProvider //colocamos ele no construtor abaixo.
  ]
})
export class FeedPage {

  public obj_feed = {
    titulo: "Layla Calisto Araújo",
    data: "Janeiro 28, 2018",
    descricao: "Carnaval",
    likes: 120000,
    coments: 4000,
    time_post: 11,
  }

  public lista_filmes =  new Array<any>();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private filmeProvider: FilmeProvider
    ) {
  }

  public soma(num1:number, num2:number): void {
    //alert(num1 + num2);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
    this.filmeProvider.getUltimoFilme().subscribe(                            //subscribe é uma função do Observable que é para avisar quando essa linha de codigo for rodada avisar que a informação foi retornada.
      data=>{

        //const resposta = data;
        //const retorno = JSON.parse((<any>data)._body);
        this.lista_filmes = (<any>data).results;


        //this.lista_filmes = data.results;                                     //results é do json e mostra os resultadas da pesquisa 

        console.log(data);                                                    //mostra a informação se for retornada 
      }, error => {
        console.log(error);                                                   //Mostra o erro se a info nao for retornada
      }
    )                                      
  }

}
