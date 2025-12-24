import { Component, ElementRef, viewChild } from '@angular/core';
import { PhotographicStyle } from "./Components/photographic-style/photographic-style";
import { Hero } from "./Components/hero/hero";
import { Navbar } from "./Components/navbar/navbar";
import { Highlights } from "./Components/highlights/highlights";
import { CloserLook } from "./Components/closer-look/closer-look";
import { Titanium } from "./Components/titanium/titanium";
import { StickyNavbar } from "./Components/sticky-navbar/sticky-navbar";
import { Animation } from "./Directives/animation";
import { CameraControl } from "./Components/camera-control/camera-control";
import { StickyFooter } from "./Components/sticky-footer/sticky-footer";
import { Vision4k } from "./Components/vision4k/vision4k";

@Component({
  selector: 'app-root',
  imports: [PhotographicStyle, Hero, Navbar, Highlights, CloserLook, Titanium, StickyNavbar, Animation, CameraControl, StickyFooter, Vision4k],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  //#region Ref
  heroRef=viewChild<ElementRef<HTMLElement>>("heroRef")
  noFooterRef=viewChild<ElementRef<HTMLElement>>("noFooterRef")
  //#endregion
  protected title = 'IT-Genesis-Task';
}
