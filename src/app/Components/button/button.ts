import { Component, input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css',
})
export class Button {
  width=input<string>("")
  height=input<string>("")
  bg=input<undefined|"blur">()
}
