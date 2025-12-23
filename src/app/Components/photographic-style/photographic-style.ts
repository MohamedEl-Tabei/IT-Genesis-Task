import { Component  } from '@angular/core';
import { BaseTextGlow } from "../base-text-glow/base-text-glow";
import { BaseSlider } from "../base-slider/base-slider";
import { PhotographicFeatures } from "../photographic-features/photographic-features";

@Component({
  selector: 'app-photographic-style',
  imports: [BaseTextGlow, BaseSlider, PhotographicFeatures],
  templateUrl: './photographic-style.html',
  styleUrl: './photographic-style.css',
})
export class PhotographicStyle {
ngAfterViewInit(){

}
}
