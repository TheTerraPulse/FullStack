import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [],
  templateUrl: './map.component.html',
  styleUrl: './map.component.scss'
})
export class MapComponent implements OnInit{
  private map!: L.Map;

  constructor() { }

  ngOnInit() {
    this.configMap();
  }

  private configMap() {
    this.map = new L.Map('map', {
      center: [45.9539, 20.9106],
      zoom: 4,
    })

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
  }

  private addMarker(longitude: number, latitude: number) {
    L.marker([longitude, latitude]).addTo(this.map)
      .bindPopup('Location')
      .openPopup();
  }
}
