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
import { AComponent } from './components/gchords/a/a.component';
import { BComponent } from './components/gchords/b/b.component';
import { B1Component } from './components/gchords/b1/b1.component';
import { CComponent } from './components/gchords/c/c.component';
import { C1Component } from './components/gchords/c1/c1.component';
import { DComponent } from './components/gchords/d/d.component';
import { EComponent } from './components/gchords/e/e.component';
import { E1Component } from './components/gchords/e1/e1.component';
import { FComponent } from './components/gchords/f/f.component';
import { F1Component } from './components/gchords/f1/f1.component';
import { GComponent } from './components/gchords/g/g.component';
import { G1Component } from './components/gchords/g1/g1.component';

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
