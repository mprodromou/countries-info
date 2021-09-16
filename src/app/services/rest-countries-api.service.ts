import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {BehaviorSubject} from "rxjs";

export interface CountryCurrency {
  code: string;
  name: string;
  symbol: string;
}

export interface CountryLanguage {
  name: string;
  nativeName: string;
}

export interface CountryInfo {
  name: string;
  nativeName: string;
  population: number;
  region: string;
  subregion: string;
  capital: string;
  topLevelDomain: string[];
  currencies: CountryCurrency[];
  languages: CountryLanguage[];
  flag: string;
}

export const SEARCH_REGIONS = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

@Injectable({
  providedIn: 'root'
})
export class RestCountriesApiService {

  private readonly apiUrlBase = 'https://restcountries.eu/rest/v2/';

  private countriesInfo: BehaviorSubject<CountryInfo[]> = new BehaviorSubject<CountryInfo[]>([]);
  public countriesInfoState = this.countriesInfo.asObservable();

  private fetchingData: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public fetchingDataState = this.fetchingData.asObservable();

  constructor(private httpClient: HttpClient) { }

  public getCountries() {
    this.setFetchingDataState(true);
    this.httpClient.get<CountryInfo[]>(this.apiUrlBase + 'all')
      .pipe(
        map(responseData => {
          const countryArray: CountryInfo[] =[];
          responseData.forEach(country => {
            countryArray.push({
              name: country.name,
              nativeName: country.nativeName,
              population: country.population,
              region: country.region,
              subregion: country.subregion,
              capital: country.capital,
              topLevelDomain: country.topLevelDomain,
              currencies: country.currencies,
              languages: country.languages,
              flag: country.flag,
            })
          });
          return countryArray;
        })
      )
      .subscribe((data: CountryInfo[]) => {
        this.countriesInfo.next(data);
        this.setFetchingDataState(false);
    })
  }

  public setFetchingDataState(state: boolean) {
    this.fetchingData.next(state);
  }
}
