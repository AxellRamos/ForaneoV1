import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rutas',
  templateUrl: './rutas.page.html',
  styleUrls: ['./rutas.page.scss'],
})
export class RutasPage implements OnInit {

  zonanorte: boolean=true;
  zonasur: boolean=false;

  constructor() { }

  ngOnInit() {
  }

  segmentChanged(event){
    var segment = event.target.value;
    if(segment == "zonanorte"){
      this.zonanorte = true;
      this.zonasur = false;
    }else{
      this.zonanorte = false;
      this.zonasur = true;
    }
  }

}
