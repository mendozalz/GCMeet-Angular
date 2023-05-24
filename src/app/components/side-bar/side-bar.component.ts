import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MatDrawerMode} from '@angular/material/sidenav';


@Component({
  selector: 'side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css'],
})
export class SidenavModeExample {
  mode = new FormControl('over' as MatDrawerMode);

  isHidden=  false;

  estiloActivo:boolean = false;
  
  visible(){
    this.isHidden = !this.isHidden;   
    this.estiloActivo = !this.estiloActivo 
    console.log(this.estiloActivo = !this.estiloActivo );
    
    console.log("click");
  }

  styleBtn ={
    position:'fixed',
    margin: '10px'
  }
  
}