import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-perfilcuarto',
  templateUrl: './perfilcuarto.page.html',
  styleUrls: ['./perfilcuarto.page.scss'],
})
export class PerfilcuartoPage implements OnInit {

  constructor(public router: Router, public navCtrl: NavController) { }

  ngOnInit() {
  }
  reserva(){
    this.router.navigate(['/resvhabitacion']);
  }

  retornar():void{
    this.navCtrl.pop();
  } 

}
