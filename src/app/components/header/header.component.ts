import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ThemeOptions, ThemeSwitcherService} from '../../services/theme-switcher.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }


}
