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
    document.body.classList.toggle("dark-theme");
  }
}
