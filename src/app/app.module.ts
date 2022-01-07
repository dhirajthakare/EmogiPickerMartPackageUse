import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { PickerModule } from '@ctrl/ngx-emoji-mart';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmaojiPicleComponent } from './emaoji-picle/emaoji-picle.component';

@NgModule({
  declarations: [
    AppComponent,
    EmaojiPicleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PickerModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
