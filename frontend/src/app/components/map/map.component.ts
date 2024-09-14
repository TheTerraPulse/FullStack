import { Component, OnInit } from '@angular/core';
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
  private currentMarker!: L.Marker;
  private customIcon!: L.Icon;

  constructor() { }

  ngOnInit() {
    this.customIcon = L.icon({
      iconUrl: 'http://leafletjs.com/examples/custom-icons/leaf-red.png',
      shadowUrl: 'http://leafletjs.com/examples/custom-icons/leaf-shadow.png',
      iconSize: [25, 41], // Size of the icon
      iconAnchor: [12, 41], // Anchor point of the icon
      popupAnchor: [1, -34], // Popup's anchor point
      shadowSize: [41, 41] // Size of the shadow
    });

    this.configMap();
    this.map.on("click", (e: L.LeafletMouseEvent)=> {
      const coordinates = e.latlng;
      console.log(coordinates)
      this.addMarker(coordinates);
    })
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

  addMarker(latlng: L.LatLng) {
    if(this.currentMarker) {
      this.map.removeLayer(this.currentMarker);
    }

    this.currentMarker = L.marker([latlng.lat, latlng.lng], {icon: this.customIcon}).addTo(this.map);
    this.currentMarker.bindPopup(`<b>Marker at</b><br>Lat: ${latlng.lat.toFixed(2)}, Lng: ${latlng.lng.toFixed(2)}`)
      .openPopup();
  }
}
