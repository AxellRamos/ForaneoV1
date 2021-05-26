import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  rutas(){
    this.router.navigate(['rutas']);
  }
  map(){
    this.router.navigate(['maps']);
  }

}
