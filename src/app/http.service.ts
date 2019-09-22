// Imports
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

// Injectable decorator
@Injectable({
  providedIn: 'root'
})

// Service logic
export class HttpService {
  // Dependency injection
  constructor(private http: HttpClient) { }

  getBeer = () => this.http.get('https://api.openbrewerydb.org/breweries');
}
