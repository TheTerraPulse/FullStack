import {Component, EventEmitter, OnInit, Output} from '@angular/core';
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

  @Output()
  public isMarkerPlaced: EventEmitter<boolean> = new EventEmitter(false);

  constructor() { }

  ngOnInit() {
    this.customIcon = L.icon({
      iconUrl: 'http://leafletjs.com/examples/custom-icons/leaf-green.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    this.configMap();
    this.map.on("click", (e: L.LeafletMouseEvent)=> {
      const coordinates = e.latlng;
      setTimeout(() => this.isMarkerPlaced.emit(true), 1000);
      this.addMarker(coordinates);
    })
  }

  private configMap() {
    this.map = new L.Map('map', {
      center: [45.9539, 20.9106],
      zoom: 4,
    })

    // L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    //   attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    //   subdomains: 'abcd',
    //   maxZoom: 19
    // }).addTo(this.map);

    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
      attribution: '&copy; <a href="https://www.esri.com">Esri</a> &mdash; Esri, DeLorme, NAVTEQ',
      maxZoom: 8
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
