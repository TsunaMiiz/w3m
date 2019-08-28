import { NgModule } from '@angular/core';
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
                                 ]
