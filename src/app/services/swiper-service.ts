import { Injectable, signal, } from '@angular/core';
import { TSignalName } from '../Types/TSignalName';
import { Swiper } from 'swiper/types';

@Injectable({
  providedIn: 'root',
})
export class SwiperService {

  signals = {
    closerLook: signal<Swiper | undefined>(undefined),
  }
  setSignal(signalName: TSignalName, swiper: Swiper | undefined) {
        console.log(signalName);
    switch (signalName) {
      case "closerLook":
        console.log("ss");
        
        this.signals.closerLook.set(swiper)
        break;

      default:
        break;
    }
  }
}
