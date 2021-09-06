import {Component, OnInit} from '@angular/core';
import {ThemeOptions, ThemeSwitcherService} from '../../services/theme-switcher.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public themeOptions = ThemeOptions;
  public themeMode = ThemeOptions.light;

  constructor(private themeService: ThemeSwitcherService) { }

  ngOnInit(): void {
    this.themeService.themeModeState.subscribe( (state: ThemeOptions) => {
      this.themeMode = state;
    });
  }

  public toggleTheme() {
    let optionToSet = this.themeMode === ThemeOptions.light ? ThemeOptions.dark : ThemeOptions.light;
    console.log(optionToSet)
    this.themeService.setThemeMode(optionToSet);
  }

}
