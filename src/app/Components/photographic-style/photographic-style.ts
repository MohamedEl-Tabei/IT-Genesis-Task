import { Component  } from '@angular/core';
import { BaseTextGlow } from "../base-text-glow/base-text-glow";
import { PhotographicFeatures } from "../photographic-features/photographic-features";
import { PhotographicFilter } from "../photographic-filter/photographic-filter";

@Component({
  selector: 'app-photographic-style',
  imports: [BaseTextGlow,  PhotographicFeatures, PhotographicFilter],
  templateUrl: './photographic-style.html',
  styleUrl: './photographic-style.css',
})
export class PhotographicStyle {
ngAfterViewInit(){

}
}
