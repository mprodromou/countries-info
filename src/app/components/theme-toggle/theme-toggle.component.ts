import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";
import {ThemeOptions, ThemeSwitcherService} from "../../services/theme-switcher.service";

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss'],
  animations: [
    trigger('sunAnim', [
      state('Light', style({
        transform: 'rotate(0.5turn)'

      })),
      state('Dark', style({
        transform: 'rotate(0)'
      })),
      transition('* <=> *', animate('750ms cubic-bezier(0.11, 0.14, 0.29, 1.32)'))
    ]),

    trigger('circleAnim', [
      state('Light', style({
        transform: 'translateX(-15%)'

      })),
      state('Dark', style({
        transform: 'translateX(0)'
      })),
      transition('* <=> *', animate('500ms'))
    ])
  ]
})
export class ThemeToggleComponent implements AfterViewInit {
  @ViewChild('themeToggler') themeToggle!:  ElementRef<HTMLElement>;

  public themeOptions = ThemeOptions;
  public themeMode = ThemeOptions.light;

  constructor(private themeService: ThemeSwitcherService) { }

  ngAfterViewInit(): void {
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
