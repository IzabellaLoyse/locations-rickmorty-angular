import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { ILocation } from 'src/app/interfaces/i-location';
import { LocationsService } from 'src/app/services/locations.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  search = new FormControl('');
  showDataList = true;

  allLocations: ILocation[] = [];
  searchLocations$: Observable<ILocation[]> = new Observable<ILocation[]>();

  constructor(private locationsService: LocationsService) {}

  ngOnInit(): void {}

  searchLocation() {
    this.searchLocations$ = this.locationsService.getLocationByName(
      this.search.value
    );

    if (this.search.value === '') {
      return alert('Insira um nome para pesquisar');
    }

    this.showDataList = !this.showDataList;
  }
}
