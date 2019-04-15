import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';
import { TooltipComponent } from './tooltip/tooltip.component';

@NgModule({
  declarations: [TooltipComponent],
  imports: [BrowserModule],
  entryComponents: [TooltipComponent]
})
export class AppModule {
  constructor(private injector: Injector) {}
  ngDoBootstrap() {
    const el = createCustomElement(TooltipComponent, {
      injector: this.injector
    });
    customElements.define('my-tooltip', el);
  }
}
