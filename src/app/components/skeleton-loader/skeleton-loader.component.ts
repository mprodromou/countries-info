import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-skeleton-loader',
  template: `
    <div [ngStyle]="getStyles()" class="skeleton-load loader"></div>
  `,
  styleUrls: ['./skeleton-loader.component.scss']
})
export class SkeletonLoaderComponent implements OnInit {

  @Input() width!: number;
  @Input() height!: number;
  @Input() isCircle = false;

  constructor() { }

  ngOnInit(): void {
  }

  getStyles() {
    const styles = {
      'width.px': this.width ? this.width : '',
      'height.px': this.height ? this.height : '',
      'border-radius': this.isCircle ? '50%' : '',
    };

    return styles;
  }

}
