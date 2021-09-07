import { Component, OnInit } from '@angular/core';
import {CountryInfo, RestCountriesApiService} from "../../services/rest-countries-api.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public countriesArray!: CountryInfo[];

  constructor(private countriesAPIS: RestCountriesApiService) { }

  ngOnInit(): void {
    this.countriesAPIS.countriesInfoState.subscribe( (countriesArray: CountryInfo[]) => {
      console.log(countriesArray);
      this.countriesArray = countriesArray;
    })
  }

}
