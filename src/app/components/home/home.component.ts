import {Component, OnDestroy, OnInit} from '@angular/core';
import {CountryInfo, RestCountriesApiService, SEARCH_REGIONS} from "../../services/rest-countries-api.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {

  public countriesArray!: CountryInfo[];
  public fetchingData = false;
  public subscriptions = new Subscription();
  public readonly loadingCardsAmount = 20;

  public readonly searchRegions = SEARCH_REGIONS;

  constructor(private countriesAPIS: RestCountriesApiService) { }

  ngOnInit(): void {
    this.subscriptions.add(
      this.countriesAPIS.countriesInfoState.subscribe( (countriesArray: CountryInfo[]) => {
        this.countriesArray = countriesArray;
      })
    );

    this.subscriptions.add(
      this.countriesAPIS.fetchingDataState.subscribe( (loading: boolean) => {
        this.fetchingData = loading;
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

}
