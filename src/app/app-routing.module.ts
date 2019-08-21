import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GchordsComponent } from './components/gchords/gchords.component';
import { BchordsComponent } from './components/bchords/bchords.component';
import { PchordsComponent } from './components/pchords/pchords.component';
import { AComponent } from './components/gchords/A/A.component';
import { BComponent } from './components/gchords/B/B.component';
import { B1Component } from './components/gchords/B1/B1.component';
import { CComponent } from './components/gchords/C/C.component';
import { C1Component } from './components/gchords/C1/C1.component';
import { DComponent } from './components/gchords/D/D.component';
import { EComponent } from './components/gchords/E/E.component';
import { E1Component } from './components/gchords/E1/E1.component';
import { FComponent } from './components/gchords/F/F.component';
import { F1Component } from './components/gchords/F1/F1.component';
import { GComponent } from './components/gchords/G/G.component';
import { G1Component } from './components/gchords/G1/G1.component';

const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'gchords',component: GchordsComponent},
  {path: 'bchords',component: BchordsComponent},
  {path: 'pchords',component: PchordsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
