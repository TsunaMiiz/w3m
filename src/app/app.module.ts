import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { GchordsComponent } from './components/gchords/gchords.component';
import { BchordsComponent } from './components/bchords/bchords.component';
import { PchordsComponent } from './components/pchords/pchords.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    GchordsComponent,
    BchordsComponent,
    PchordsComponent,
    AComponent,
    BComponent,
    B1Component,
    CComponent,
    C1Component,
    DComponent,
    EComponent,
    E1Component,
    FComponent,
    F1Component,
    GComponent,
    G1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
