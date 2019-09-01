import { NgModule, PACKAGE_ROOT_URL } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AComponent } from './components/gchords/a/a.component';
import { B1Component } from './components/gchords/b1/b1.component';
import { BComponent } from './components/gchords/b/b.component';
import { CComponent } from './components/gchords/c/c.component';
import { C1Component } from './components/gchords/c1/c1.component';
import { DComponent } from './components/gchords/d/d.component';
import { E1Component } from './components/gchords/e1/e1.component';
import { EComponent } from './components/gchords/e/e.component';
import { FComponent } from './components/gchords/f/f.component';
import { F1Component } from './components/gchords/f1/f1.component';
import { GComponent } from './components/gchords/g/g.component';
import { G1Component } from './components/gchords/g1/g1.component';
import { GchordsComponent } from './components/gchords/gchords.component';
import { BchordsComponent } from './components/bchords/bchords.component';
import { PchordsComponent } from './components/pchords/pchords.component';
import { ChordsComponent } from './components/chords/chords.component';
import { PaComponent } from './components/pchords/pa/pa.component';
import { PbComponent } from './components/pchords/pb/pb.component';
import { Pb1Component } from './components/pchords/pb1/pb1.component';
import { PcComponent } from './components/pchords/pc/pc.component';
import { Pc1Component } from './components/pchords/pc1/pc1.component';
import { PdComponent } from './components/pchords/pd/pd.component';
import { PeComponent } from './components/pchords/pe/pe.component';
import { Pe1Component } from './components/pchords/pe1/pe1.component';
import { PfComponent } from './components/pchords/pf/pf.component';
import { Pf1Component } from './components/pchords/pf1/pf1.component';
import { PgComponent } from './components/pchords/pg/pg.component';
import { Pg1Component } from './components/pchords/pg1/pg1.component';


const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'gchords',component: GchordsComponent},
  {path: 'bchords',component: BchordsComponent},
  {path: 'pchords',component: PchordsComponent},
  {path: 'gchords/a', component: AComponent},
  {path: 'gchords/bb', component: B1Component},
  {path: 'gchords/b', component: BComponent},
  {path: 'gchords/c', component: CComponent},
  {path: 'gchords/c#', component: C1Component},
  {path: 'gchords/d', component: DComponent},
  {path: 'gchords/eb', component: E1Component},
  {path: 'gchords/e', component: EComponent},
  {path: 'gchords/f', component: FComponent},
  {path: 'gchords/f#', component: F1Component},
  {path: 'gchords/g', component: GComponent},
  {path: 'gchords/g#', component: G1Component},
  {path: '4chords', component: ChordsComponent},
  {path: 'pchords/pa', component: PaComponent},
  {path: 'pchords/pbb', component: PbComponent},
  {path: 'pchords/pb', component: Pb1Component},
  {path: 'pchords/pc', component: PcComponent},
  {path: 'pchords/pc#', component: Pc1Component},
  {path: 'pchords/pd', component: PdComponent},
  {path: 'pchords/pe', component: PeComponent},
  {path: 'pchords/peb', component: Pe1Component},
  {path: 'pchords/pf', component: PfComponent},
  {path: 'pchords/pf#', component: Pf1Component},
  {path: 'pchords/pg', component: PgComponent},
  {path: 'pchords/pg#', component: Pg1Component}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [HomeComponent,
                                 GchordsComponent,
                                 BchordsComponent,
                                 PchordsComponent,
                                 AComponent,
                                 B1Component,
                                 BComponent,
                                 CComponent,
                                 C1Component,
                                 DComponent,
                                 E1Component,
                                 EComponent,
                                 FComponent,
                                 F1Component,
                                 GComponent,
                                 G1Component,
                                 ChordsComponent,
                                 PaComponent,
                                 PbComponent,
                                 Pb1Component,
                                 PcComponent,
                                 Pc1Component,
                                 PdComponent,
                                 Pe1Component,
                                 PeComponent,
                                 PfComponent,
                                 Pf1Component,
                                 PgComponent,
                                 Pg1Component
                                 ]
