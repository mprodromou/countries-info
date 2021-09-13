import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ThemeOptions, ThemeSwitcherService} from '../../services/theme-switcher.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @ViewChild('themeToggler') themeToggle!:  ElementRef<HTMLElement>;

  public themeOptions = ThemeOptions;
  public themeMode = ThemeOptions.light;

  constructor(private themeService: ThemeSwitcherService) { }

  ngOnInit(): void {
    this.themeService.themeModeState.subscribe( (state: ThemeOptions) => {
      this.themeMode = state;
    });

    this.setThemePreference();
  }

  public toggleTheme() {
    let optionToSet = this.themeMode === ThemeOptions.light ? ThemeOptions.dark : ThemeOptions.light;
    this.themeToggle.nativeElement.setAttribute('aria-label', 'Switch to ' +  optionToSet + ' theme');
    this.themeService.setThemeMode(optionToSet);
  }

  public setThemePreference() {
    console.log('hi')
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      this.themeService.setThemeMode(ThemeOptions.dark);
      this.themeToggle.nativeElement.setAttribute('aria-label', 'Switch to ' +  ThemeOptions.dark + ' theme');
      return;
    }
    this.themeService.setThemeMode(ThemeOptions.light);
    this.themeToggle.nativeElement.setAttribute('aria-label', 'Switch to ' +  ThemeOptions.light + ' theme');
  }

}
