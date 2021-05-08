import { Component, OnInit } from '@angular/core';
import * as leaflet from 'leaflet';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.page.html',
  styleUrls: ['./maps.page.scss'],
})
export class MapsPage implements OnInit {
  map: any;

  constructor() { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.loadmap();
  }

  loadmap() {
    var map = leaflet.map('map', {
      attributionControl: false,
      center: [13.0926277,-86.357367],
      'zoom': 13,
      'layers': [
        leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            'attribution': 'Map data &copy; OpenStreetMap contributors'
        })
      ]
    });
  }

}
