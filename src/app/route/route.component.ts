import { Component } from '@angular/core';
import { PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-route',
  templateUrl: './route.component.html',
  styleUrls: ['./route.component.scss']
})
export class RouteComponent {
  stops!: any[];

  ngOnInit() {
    this.stops = [
      {
        name: 'Babbio',
        image: 'https://images.ctfassets.net/mviowpldu823/855fb73053799b60a42a80b18ae145e9/4ae621e4ea552fdf03c13adac5b32b09/STEVENS-knk02-v2-babbio-crop.jpg',
        address: '525 River St, Hoboken, NJ 07030',
        icon: PrimeIcons.MAP_MARKER,
        color: '#00',
      },
      {
        name: 'Babbio',
        image: 'https://images.ctfassets.net/mviowpldu823/855fb73053799b60a42a80b18ae145e9/4ae621e4ea552fdf03c13adac5b32b09/STEVENS-knk02-v2-babbio-crop.jpg',
        address: '525 River St, Hoboken, NJ 07030',
        icon: PrimeIcons.MAP_MARKER,
        color: '#00',
      },{
        name: 'Babbio',
        image: 'https://images.ctfassets.net/mviowpldu823/855fb73053799b60a42a80b18ae145e9/4ae621e4ea552fdf03c13adac5b32b09/STEVENS-knk02-v2-babbio-crop.jpg',
        address: '525 River St, Hoboken, NJ 07030',
        icon: PrimeIcons.MAP_MARKER,
        color: '#00',
      },{
        name: 'Babbio',
        image: 'https://images.ctfassets.net/mviowpldu823/855fb73053799b60a42a80b18ae145e9/4ae621e4ea552fdf03c13adac5b32b09/STEVENS-knk02-v2-babbio-crop.jpg',
        address: '525 River St, Hoboken, NJ 07030',
        icon: PrimeIcons.MAP_MARKER,
        color: '#00',
      },{
        name: 'Babbio',
        image: 'https://images.ctfassets.net/mviowpldu823/855fb73053799b60a42a80b18ae145e9/4ae621e4ea552fdf03c13adac5b32b09/STEVENS-knk02-v2-babbio-crop.jpg',
        address: '525 River St, Hoboken, NJ 07030',
        icon: PrimeIcons.MAP_MARKER,
        color: '#00',
      },{
        name: 'Babbio',
        image: 'https://images.ctfassets.net/mviowpldu823/855fb73053799b60a42a80b18ae145e9/4ae621e4ea552fdf03c13adac5b32b09/STEVENS-knk02-v2-babbio-crop.jpg',
        address: '525 River St, Hoboken, NJ 07030',
        icon: PrimeIcons.MAP_MARKER,
        color: '#00',
      },{
        name: 'Babbio',
        image: 'https://images.ctfassets.net/mviowpldu823/855fb73053799b60a42a80b18ae145e9/4ae621e4ea552fdf03c13adac5b32b09/STEVENS-knk02-v2-babbio-crop.jpg',
        address: '525 River St, Hoboken, NJ 07030',
        icon: PrimeIcons.MAP_MARKER,
        color: '#00',
      },
      // Add more locations here
    ];
  }
}
