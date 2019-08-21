import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GchordsComponent } from './components/gchords/gchords.component';
import { BchordsComponent } from './components/bchords/bchords.component';
import { PchordsComponent } from './components/pchords/pchords.component';

const routes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'gchords',component: GchordsComponent},
  {path: 'bchords',component: BchordsComponent},
  {path: 'pchords',component: PchordsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
