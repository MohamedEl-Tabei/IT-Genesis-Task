import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef, input, output, viewChild } from '@angular/core';
import { SwiperContainer } from 'swiper/element';
import { SlideContent } from '../../Interfaces/slide-content';
import { Swiper, SwiperEvents } from 'swiper/types';
import { SwiperService } from '../../services/swiper-service';
import { TSignalName } from '../../Types/TSignalName';

@Component({
  selector: 'app-base-slider',
  imports: [],
  templateUrl: './base-slider.html',
  styleUrl: './base-slider.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class BaseSlider {
  swiperRef = viewChild<ElementRef<SwiperContainer>>("swiperRef");
  observer!: IntersectionObserver
  isOnView = false
  isEnd = false
  filters = ["", "brightness", "grayscale"]

  //#region inputs
  slideWidth = input<string>("100%")
  slideHeight = input<string>("100%")
  slides = input<SlideContent[]>([]);
  sliderType = input<"filter" | "">()
  image = input<string>("")
  signalName = input<TSignalName>(undefined)
  //#endregion
  //#region lifecyle
  constructor(private swiperService: SwiperService) { }
 
  ngAfterViewInit() {
    this.observer = new IntersectionObserver(([entry]) => {
      this.isOnView = entry.isIntersecting
    })
    if (this.swiperRef()?.nativeElement) this.observer.observe(this.swiperRef()?.nativeElement as Element)
      
    this.swiperService.setSignal(this.signalName(),this.swiperRef()?.nativeElement.swiper )
    this.setStyle()
  }
  //#endregion
  //#region style
  setStyle() {
    let swiper = this.swiperRef()?.nativeElement.swiper
    let elementSwiper = this.swiperRef()?.nativeElement
    switch (this.sliderType()) {
      case "filter":
        elementSwiper?.style.setProperty("background-image", 'url(' + this.image() + ')')
        swiper?.mousewheel.enable()
        elementSwiper?.setAttribute("space-between", "0")
        elementSwiper?.setAttribute("free-mode", "true")
        break;

      default:
        break;
    }
  }
  //#endregion
  //#region event handlers

  onScrollFilter(event: Event) {
    if (this.sliderType() == "filter") {
      let evnt = event as WheelEvent
      let swiper = this.swiperRef()?.nativeElement.swiper
      let swiperElement = this.swiperRef()?.nativeElement
      this.isEnd = swiper?.isEnd || false

      if (evnt.deltaY < 0) {

        if (swiper?.isBeginning) swiper.mousewheel.disable()
        else {
          swiperElement?.scrollIntoView({ behavior: "smooth" })
          evnt.preventDefault()
          swiper?.mousewheel.enable()
        }
        if (swiper?.mousewheel.enabled) swiperElement?.style.setProperty("width", "100%")
      }
      else {
        if (swiper?.isEnd) swiper.mousewheel.disable()
        else {
          swiperElement?.scrollIntoView()
          evnt.preventDefault()

          swiper?.mousewheel.enable()
        }
        if (!swiper?.mousewheel.enabled) swiperElement?.style.setProperty("width", "80%")
      }


    }

  }

  //#endregion
}
