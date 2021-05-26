import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-resvhabitacion',
  templateUrl: './resvhabitacion.page.html',
  styleUrls: ['./resvhabitacion.page.scss'],
})
export class ResvhabitacionPage implements OnInit {

  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }

  reserva(){
    
  }
  retornar():void{
    this.navCtrl.pop();
  } 

}
