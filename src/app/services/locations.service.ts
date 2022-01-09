import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ILocation } from '../interfaces/i-location';
import { catchError, delay, map, retry } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocationsService {
  private readonly API = `${environment.API}`;

  constructor(private httpClient: HttpClient) {}

  private handleError() {
    return (error: string | undefined) => {
      throw new Error(error);
    };
  }

  getAllLocations() {
    return this.httpClient.get<ILocation[]>(`${this.API}`).pipe(
      retry(3),
      map((response: any) => {
        const { results } = response;
        return results;
      }),
      delay(2000),
      catchError(this.handleError())
    );
  }

  getLocationByName(name: string) {
    return this.httpClient.get<ILocation[]>(`${this.API}/?name=${name}`).pipe(
      retry(3),
      map((response: any) => {
        const { results } = response;
        return results;
      }),
      catchError(this.handleError())
    );
  }
}
