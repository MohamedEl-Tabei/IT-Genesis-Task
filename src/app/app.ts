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
import { VivaResolution } from "./Components/viva-resolution/viva-resolution";
import { SetMessage } from "./Directives/set-message";
import { StickyFooterService } from './services/sticky-footer-service';

@Component({
  selector: 'app-root',
  imports: [PhotographicStyle, Hero, Navbar, Highlights, CloserLook, Titanium, StickyNavbar, Animation, CameraControl, StickyFooter, Vision4k, VivaResolution, SetMessage],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor(public stickyFooterService:StickyFooterService){}
  //#region Ref
  heroRef=viewChild<ElementRef<HTMLElement>>("heroRef")
  footerRef=viewChild<ElementRef<HTMLElement>>("footerRef")
  //#endregion
  protected title = 'IT-Genesis-Task';
}
