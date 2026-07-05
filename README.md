# Flight Tracking & Operations Dashboard

## Overview

The **Flight Tracking & Operations Dashboard** is a responsive Angular application built for aviation operations monitoring. It provides an interactive Leaflet map to visualize flights, operational KPIs, flight search and filtering, and detailed flight information.

This project was developed as part of the **Flight Tracking Dashboard Assessment**.

---

## Features

### ✈️ Interactive Flight Map

- Displays 20 flight markers using Leaflet
- Marker clustering for better visualization
- Flight popup displaying:
  - Flight Number
  - Callsign
  - Origin
  - Destination
  - Status

### 📍 Flight Route Visualization

- Select any flight from the map or table
- Draws a polyline between origin and destination
- Automatically centers the map on the selected route

### 📋 Flight Details Panel

Displays:

- Flight Number
- Callsign
- Aircraft Type
- Origin
- Destination
- Current Status
- Estimated Departure Time
- Estimated Arrival Time

### 📊 Operations Dashboard

KPI Cards:

- Total Flights
- Active Flights
- Delayed Flights
- Arrived Flights

### 🔍 Search & Filters

- Search by Callsign
- Filter by Status
- Filter by Origin Airport
- Filter by Destination Airport

### 📑 Flight Table

- Responsive table
- Sort by Flight Number
- Sort by Status
- Row selection synchronized with the map

### 📱 Responsive Design

Optimized for:

- Desktop
- Tablet
- Mobile

---

# Technologies Used

- Angular 20
- TypeScript
- Bootstrap 5
- Leaflet
- Leaflet MarkerCluster
- RxJS
- HTML5
- CSS3

---

# Project Structure

```
src/
 ├── app/
 │    ├── models/
 │    ├── pages/
 │    │     └── dashboard/
 │    ├── services/
 │
public/
 ├── data/
 ├── images/
```

---

# Installation

Clone the repository

```bash
git clone https://github.com/Krishna-ui-web/flight-tracking-dashboard.git
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

Open your browser:

```
http://localhost:4200
```

---

# Development

If you experience Hot Module Replacement (HMR) refresh issues in certain development environments, you can alternatively start the application using:

```bash
ng serve --no-hmr
```

---

# Build

```bash
ng build
```

---

# Mock Data

Flight data is loaded from:

```
public/data/flight.json
```

No backend service is required.

---

# Design Highlights

- Modern aviation dashboard layout
- Responsive Bootstrap grid
- Interactive Leaflet map
- Marker clustering for improved visualization
- Dynamic KPI cards
- Route highlighting using polylines
- Search and filtering
- Sorting functionality
- Empty state handling
- Responsive UI for desktop and tablet devices

---

# Future Improvements

- Real-time Flight API integration
- Flight animation / playback
- Dark Mode
- Airport markers
- Weather overlays
- Unit Testing

---

# Author

**Krishna**

Developed as part of the Flight Tracking & Operations Dashboard Assessment.