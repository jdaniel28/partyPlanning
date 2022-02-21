import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Venue } from '../Types/Venue';

@Injectable({
  providedIn: 'root'
})
export class VenueService {

  root_url = "http://localhost:9090/";

  constructor(private http: HttpClient) { }





  postVenue(formData: FormData) {
    return this.http.post<any>(this.root_url + "Venue", formData, { 'observe': 'response' })
  }

  getVenue(venueId: string) {
    return this.http.get<Venue>(this.root_url + "Venue/" + venueId);
  }

  getAllVenues() {
    return this.http.get<Venue[]>(this.root_url + "Venues/");
  }

}
