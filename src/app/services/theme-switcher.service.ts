import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";

export enum ThemeOptions {
  light = 'Light',
  dark = 'Dark'
}

@Injectable({
  providedIn: 'root'
})
export class ThemeSwitcherService {

  private themeMode: BehaviorSubject<ThemeOptions> = new BehaviorSubject<ThemeOptions>(ThemeOptions.light);
  public themeModeState = this.themeMode.asObservable();

  constructor() { }

  public setThemeMode(themeOption: ThemeOptions) {
    this.themeMode.next(themeOption);
    if (themeOption === ThemeOptions.dark) {
      document.body.classList.add("dark-theme");
      document.body.classList.remove("light-theme");
    } else {
      document.body.classList.remove("dark-theme");
      document.body.classList.add("light-theme");
    }


  }
}
