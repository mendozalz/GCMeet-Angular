import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorizontalProgressBarComponent } from "./horizontal-progress-bar.component";
import {MatProgressBarModule} from '@angular/material/progress-bar';



@NgModule({
  declarations: [
    HorizontalProgressBarComponent
  ],
  imports: [
    CommonModule,
    MatProgressBarModule
  ],
  exports:[
    HorizontalProgressBarComponent
  ]
})
export class HorizontalProgressBarModule { }
