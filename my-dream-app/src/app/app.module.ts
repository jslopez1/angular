import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { Server } from './server.element/server.element.component';
import { MicomponenteComponent } from './micomponente/micomponente.component';

@NgModule({
  declarations: [
    AppComponent,
    Server,
    MicomponenteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  
}
