import { Component } from '@angular/core';

@Component({
  selector: 'navigator-iconos',
  templateUrl: './navigator-iconos.component.html',
  styleUrls: ['./navigator-iconos.component.css']
})
export class NavigatorIconosComponent {
  isActive: boolean = true;

  toggleIconColor() {
    this.isActive = !this.isActive;
  }
}
