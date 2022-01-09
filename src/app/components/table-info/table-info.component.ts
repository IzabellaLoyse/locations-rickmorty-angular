import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ILocation } from 'src/app/interfaces/i-location';
import { LocationsService } from 'src/app/services/locations.service';

@Component({
  selector: 'app-table-info',
  templateUrl: './table-info.component.html',
  styleUrls: ['./table-info.component.scss'],
})
export class TableInfoComponent implements OnInit {
  allLocations: ILocation[] = [];
  locations$: Observable<ILocation[]> = new Observable<ILocation[]>();

  constructor(private locationsService: LocationsService) {}

  ngOnInit(): void {
    this.locations$ = this.locationsService.getAllLocations();
  }
}
