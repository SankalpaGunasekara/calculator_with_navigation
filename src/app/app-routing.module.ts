import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CalcComponent } from './calc/calc.component';
import { DistrictsComponent } from './districts/districts.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'calculator', component: CalcComponent },
  {path: 'districts',component:DistrictsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
