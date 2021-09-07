import {AfterViewInit, Component} from '@angular/core';
import {RestCountriesApiService} from "./services/rest-countries-api.service";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  constructor(private countriesApi: RestCountriesApiService) {
  }

  ngAfterViewInit() {
    this.countriesApi.getCountries();
  }
}
