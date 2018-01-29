import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public nome_usuario:string = "Léo Araujo";

  constructor(public navCtrl: NavController) {

  }

}
