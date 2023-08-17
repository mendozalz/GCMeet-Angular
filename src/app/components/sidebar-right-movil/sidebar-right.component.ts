import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatDrawerMode} from '@angular/material/sidenav';

@Component({
  selector: 'sidebar-right-movil',
  templateUrl: './sidebar-right.component.html',
  styleUrls: ['./sidebar-right.component.css']
})
export class SidebarRightComponent {
  mode = new FormControl('over' as MatDrawerMode);

  isHiddenR=  false;

  estiloActivoR:boolean = false;
  
  visibleR(){
    this.isHiddenR = !this.isHiddenR;   
    this.estiloActivoR = !this.estiloActivoR 
  }


}
