import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HorizontalProgressBarModule } from './components/progress/horizontal-progress-bar/horizontal-progress-bar.module';
import { ComponentsModule } from './components/components.module';
import { AppRoutingModule } from './app-routing.module';








@NgModule({
  declarations: [
    AppComponent,   
    
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HorizontalProgressBarModule,
    ComponentsModule,
    AppRoutingModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}

