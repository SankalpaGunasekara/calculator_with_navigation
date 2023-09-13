import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CalcComponent } from './calc/calc.component';
import { DistrictsComponent } from './districts/districts.component';
import { CvCreatorComponent } from './cv-creator/cv-creator.component';

const routes: Routes = [

  { path: '', component: HomeComponent, data: { title: 'Home' } },
  { path: 'calculator', component: CalcComponent, data:{title: 'Calculator'} },
  {path: 'districts',component:DistrictsComponent, data:{title:'Districts'}},
  {path: 'cv-creator', component:CvCreatorComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
