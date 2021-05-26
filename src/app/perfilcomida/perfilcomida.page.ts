import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-perfilcomida',
  templateUrl: './perfilcomida.page.html',
  styleUrls: ['./perfilcomida.page.scss'],
})
export class PerfilcomidaPage implements OnInit {

  constructor(public router: Router, public navCtrl: NavController) { }

  ngOnInit() {
  }

  reserva(){
    this.router.navigate(['reservas'])
  }

  retornar():void{
    this.navCtrl.pop();
  }

}
