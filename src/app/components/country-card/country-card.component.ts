import {Component, Input, OnInit} from '@angular/core';
import {CountryInfo} from "../../services/rest-countries-api.service";

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss']
})
export class CountryCardComponent implements OnInit {

  @Input() countryInfo!: CountryInfo;
  @Input() loading = false;

  constructor() { }

  ngOnInit(): void {
  }

}
