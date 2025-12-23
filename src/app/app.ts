import { Component } from '@angular/core';
import { PhotographicStyle } from "./Components/photographic-style/photographic-style";
import { Hero } from "./Components/hero/hero";
import { Navbar } from "./Components/navbar/navbar";
import { Highlights } from "./Components/highlights/highlights";
import { CloserLook } from "./Components/closer-look/closer-look";
import { Titanium } from "./Components/titanium/titanium";

@Component({
  selector: 'app-root',
  imports: [PhotographicStyle, Hero, Navbar, Highlights, CloserLook, Titanium],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'IT-Genesis-Task';
}
