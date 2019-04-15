import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'custom-tooltip',
  template: `
    <div class="tooltip">
      Hover over me
      <span class="tooltiptext"><slot></slot></span>
    </div>
  `,
  styles: [
    `
      /* Tooltip container */
      .tooltip {
        position: relative;
        display: inline-block;
        border-bottom: 1px dotted black; /* If you want dots under the hoverable text */
      }

      /* Tooltip text */
      .tooltip .tooltiptext {
        visibility: hidden;
        width: 120px;
        background-color: black;
        color: #fff;
        text-align: center;
        padding: 5px 0;
        border-radius: 6px;

        /* Position the tooltip text - see examples below! */
        position: absolute;
        z-index: 1;
      }

      /* Show the tooltip text when you mouse over the tooltip container */
      .tooltip:hover .tooltiptext {
        visibility: visible;
      }
    `
  ],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class TooltipComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
