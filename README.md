# Flight Tracking & Operations Dashboard

## Overview

The Flight Tracking & Operations Dashboard is a responsive Angular application built for aviation operations monitoring. It provides an interactive Leaflet map to visualize flights, operational KPIs, flight search and filtering, and detailed flight information.

This project was developed as part of the Flight Tracking Dashboard Assessment.

---

## Features

### Interactive Flight Map
- Displays 20 flight markers using Leaflet
- Marker clustering for better visualization
- Flight popup showing:
  - Flight Number
  - Callsign
  - Origin
  - Destination
  - Status

### Flight Route Visualization
- Select any flight from the map or table
- Draws a polyline between origin and destination
- Automatically centers the map on the selected route

### Flight Details Panel
Displays:
- Flight Number
- Callsign
- Aircraft Type
- Origin
- Destination
- Current Status
- Estimated Departure Time
- Estimated Arrival Time

### Operations Dashboard
KPI Cards:
- Total Flights
- Active Flights
- Delayed Flights
- Arrived Flights

### Search & Filters
- Search by Callsign
- Filter by Status
- Filter by Origin
- Filter by Destination

### Flight Table
- Responsive table
- Sort by Flight Number
- Sort by Status
- Row selection synchronized with map

### Responsive Design
Optimized for:
- Desktop
- Tablet
- Mobile devices

---

## Technologies Used

- Angular 20
- TypeScript
- Bootstrap 5
- Leaflet
- Leaflet MarkerCluster
- RxJS
- HTML5
- CSS3

---

## Project Structure

```
src/
 ├── app/
 │    ├── models/
 │    ├── pages/dashboard/
 │    ├── services/
 │
 ├── public/
 │    ├── data/
 │    ├── images/
```

---

## Installation

Clone the repository

```bash
git clone <repository-url>
```

Navigate into the project

```bash
cd flightDashboard
```

Install dependencies

```bash
npm install
```

Run the application

```bash
ng serve
```

Open

```
http://localhost:4200
```

---

## Build

```bash
ng build
```

---

## Mock Data

Flight data is loaded from:

```
public/data/flight.json
```

No backend service is required.

---

## Design Highlights

- Clean aviation dashboard layout
- Responsive Bootstrap grid
- Interactive Leaflet map
- Marker clustering for improved visualization
- Smooth route highlighting
- Empty state handling
- Professional KPI cards
- Modern card-based UI

---

## Future Improvements

- Real-time flight API integration
- Flight animation
- Dark Mode
- Airport markers
- Weather overlays
- Unit Testing

---

## Author

Krishna