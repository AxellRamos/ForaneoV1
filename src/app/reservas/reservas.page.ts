import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.page.html',
  styleUrls: ['./reservas.page.scss'],
})
export class ReservasPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }
  retornar():void{
    this.navCtrl.pop();
  } 

}
