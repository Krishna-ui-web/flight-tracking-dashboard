import { AfterViewInit, Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { Flight } from '../../models/flight.model';
import { FlightServices } from '../../services/flight-services';
import { FormsModule } from '@angular/forms';
import 'leaflet.markercluster';
@Component({
  selector: 'app-dashboard',
  imports: [FormsModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard implements OnInit, AfterViewInit{
 
 // ---------------- Properties ----------------

  private map!: L.Map;
  private markers: L.Marker[]=[];
flights: Flight[]=[];
selectedFlight?: Flight;
private routeLine!: L.Polyline;

private markerCluster!: L.MarkerClusterGroup;
searchText: string = '';
selectedStatus: string = 'All';
selectedOrigin: string = 'All';
selectedDestination: string = 'All';
filteredFlights: Flight[] = [];
origins:string[] = [];
destinations:string[] = [];

sortColumn:string='';
sortAsc:boolean=true;

// ---------------- Constructor ----------------

constructor(private flightServices:FlightServices){}

// ---------------- Lifecycle ----------------

ngOnInit(): void {
this.loadFlights();
}

ngAfterViewInit(): void {
  this.initializeMap();
}

 // ---------------- Getters ----------------

 get totalFlights(): number{
return this.filteredFlights.length;
 }
get activeFlights():number{
return this.filteredFlights.filter(f=>f.status === 'Active').length;
}
get delayedFlights():number{
return this.filteredFlights.filter(f=>f.status === 'Delayed').length;
}
get arrivedFlights():number{
return this.filteredFlights.filter(f=>f.status === 'Arrived').length;
}

 // ---------------- Methods ----------------

 initializeMap():void{
this.map = L.map('map').setView([20.5937, 78.9629], 5);
L.tileLayer(
  'https://{s}.tile.openStreetmap.org/{z}/{x}/{y}.png',
  {
    attribution:'&copy; OpenStreetMap contributions'
  }
).addTo(this.map);
setTimeout(()=>{
  this.map.invalidateSize();
}, 100);
}

loadFlights():void{
this.flightServices.getFlights().subscribe({
  next: (data)=>{
    this.flights = data;
    this.filteredFlights = [...this.flights];
    this.origins = [...new Set(this.flights.map(flight=>flight.origin))];
    this.destinations = [...new Set(this.flights.map(flight=>flight.destination))];
   

    this.displayMarkers();
    
  },
  error:(err)=>{
console.error(err);

  }

});

}


displayMarkers():void{
  this.markers = [];
delete(L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'images/marker-icon-2x.png',
 iconUrl: 'images/marker-icon.png',
 shadowUrl: 'images/marker-shadow.png'

});
// create marker cluster
this.markerCluster = L.markerClusterGroup({
  showCoverageOnHover:false,
  maxClusterRadius:60,
  spiderfyOnMaxZoom: true
});
this.filteredFlights.forEach((flight)=>{
  const marker = L.marker([flight.lat, flight.lng])
  .bindPopup(`
    <b>Flight: ${flight.flightNumber}</b><br>
    <b>CallSign: ${flight.callsign}</b><br>
   <b> ${flight.origin} -> ${flight.destination}</b><br>
   <b>Status: ${flight.status}</b>
    `
  );
marker.on('click', ()=>{
  this.selectFlight(flight);

});
this.markers.push(marker);
// add marker in cluster
this.markerCluster.addLayer(marker);
});
this.map.addLayer(this.markerCluster);

}

selectFlight(flight:Flight): void{
this.selectedFlight = flight;
this.drawFlightRoute(flight)
}

drawFlightRoute(flight:Flight){
if(this.routeLine){
this.map.removeLayer(this.routeLine);
}
this.routeLine = L.polyline(
  [
    [flight.originLat, flight.originLng],
    [flight.destinationLat, flight.destinationLng]
  ],
  {
    color:'#1976D2',
    weight:5
  }
).addTo(this.map);
this.map.fitBounds(this.routeLine.getBounds(),{
  padding: [40,40]
});

}

// Apply Filters
applyFilters():void{
  this.filteredFlights = this.flights.filter(flight=>{
    const matchSearch = flight.callsign.toLowerCase()
    .includes(this.searchText.toLowerCase());
    
    const matchStatus = this.selectedStatus === 'All' || flight.status === this.selectedStatus;
    const matchOrigin = this.selectedOrigin === 'All' || flight.origin === this.selectedOrigin;
    const matchDestination = this.selectedDestination === 'All' || flight.destination === this.selectedDestination;
     return (matchSearch && matchStatus && matchOrigin && matchDestination)
  });
 
  this.refreshMarkers();
}
// Refresh Markers
refreshMarkers(): void{
  if(this.markerCluster){
this.map.removeLayer(this.markerCluster);
  }

this.markers = [];
if(this.routeLine){
this.map.removeLayer(this.routeLine);
}
this.displayMarkers();
}


sortData(column:string): void{
if(this.sortColumn===column){
this.sortAsc=!this.sortAsc;
}else{
  this.sortColumn=column;
  this.sortAsc=true;
}
this.filteredFlights.sort((a:Flight, b:Flight)=>{
  const valueA=a[column as keyof Flight];
  const valueB=b[column as keyof Flight];

  if(valueA<valueB){
return this.sortAsc ? -1 : 1;
  }
  if(valueA>valueB){
return this.sortAsc ? 1 : -1
  }
  return 0;
});
}
}
