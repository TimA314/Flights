import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-flights',
  templateUrl: './search-flights.component.html',
  styleUrls: ['./search-flights.component.css']
})
export class SearchFlightsComponent implements OnInit {

  searchResult: FlightRm[] = [
    {
      airline: "American Airlines",
      remainingNumberOfSeats: 500,
      departure: { time: Date.now().toString(), place: "Los Angeles" },
      arrival: { time: Date.now().toString(), place: "Instanbul" },
      price: "350.99",
    },
    {
      airline: "United",
      remainingNumberOfSeats: 150,
      departure: { time: Date.now().toString(), place: "Dallas" },
      arrival: { time: Date.now().toString(), place: "Pheonix" },
      price: "225.49",
    },
    {
      airline: "JAL",
      remainingNumberOfSeats: 600,
      departure: { time: Date.now().toString(), place: "New York" },
      arrival: { time: Date.now().toString(), place: "Denver" },
      price: "1000.00",
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

export interface FlightRm {
  airline: string;
  arrival: TimePlaceRm;
  departure: TimePlaceRm;
  price: string;
  remainingNumberOfSeats: number;
}

export interface TimePlaceRm {
  place: string;
  time: string;
}
