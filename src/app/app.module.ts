import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule,routingComponent } from './app-routing.module';
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
import { ChordsComponent } from './components/chords/chords.component';
import { PaComponent } from './components/pchords/pa/pa.component';
import { Pb1Component } from './components/pchords/pb1/pb1.component';
import { PbComponent } from './components/pchords/pb/pb.component';
import { PcComponent } from './components/pchords/pc/pc.component';
import { Pc1Component } from './components/pchords/pc1/pc1.component';
import { PdComponent } from './components/pchords/pd/pd.component';
import { Pe1Component } from './components/pchords/pe1/pe1.component';
import { PeComponent } from './components/pchords/pe/pe.component';
import { PfComponent } from './components/pchords/pf/pf.component';
import { Pf1Component } from './components/pchords/pf1/pf1.component';
import { PgComponent } from './components/pchords/pg/pg.component';
import { Pg1Component } from './components/pchords/pg1/pg1.component';
import { PmcComponent } from './components/chords/pmc/pmc.component';
import { LoveComponent } from './components/chords/love/love.component';
import { KaokonComponent } from './components/chords/kaokon/kaokon.component';
import { KebrukComponent } from './components/chords/kebruk/kebruk.component';
import { BackpackComponent } from './components/chords/backpack/backpack.component';

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
    G1Component,
    ChordsComponent,
    PaComponent,
    Pb1Component,
    PbComponent,
    PcComponent,
    Pc1Component,
    PdComponent,
    Pe1Component,
    PeComponent,
    PfComponent,
    Pf1Component,
    PgComponent,
    Pg1Component,
    PmcComponent,
    LoveComponent,
    KaokonComponent,
    KebrukComponent,
    BackpackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
