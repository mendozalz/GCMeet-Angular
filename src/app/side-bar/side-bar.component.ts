import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatDrawerMode} from '@angular/material/sidenav';

/* @Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent {
  mode = new FormControl('over' as MatDrawerMode);
  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);
} */

@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SidenavModeExample {
  mode = new FormControl('push' as MatDrawerMode);

  oculto=  false

  visible(){
    this.oculto = !this.oculto;
  }
}