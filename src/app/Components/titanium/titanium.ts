import { Component } from '@angular/core';
import { BaseTextGlow } from "../base-text-glow/base-text-glow";
import { TitaniumSlider } from "../titanium-slider/titanium-slider";

@Component({
  selector: 'app-titanium',
  imports: [BaseTextGlow, TitaniumSlider],
  templateUrl: './titanium.html',
  styleUrl: './titanium.css',
})
export class Titanium {
  
}
