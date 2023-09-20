import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CalcComponent } from './calc/calc.component';
import { DistrictsComponent } from './districts/districts.component';
import { CvCreatorComponent } from './cv-creator/cv-creator.component';
import { AddFormComponent } from './add-form/add-form.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { SandboxComponent } from './sandbox/sandbox.component';

const routes: Routes = [

  { path: '', component: HomeComponent, data: { title: 'Home' } },
  { path: 'calculator', component: CalcComponent, data: { title: 'Calculator' } },
  { path: 'districts', component: DistrictsComponent, data: { title: 'Districts' } },
  { path: 'vehicle specification PDF maker', component: CvCreatorComponent },
  { path: 'add-item', component: AddFormComponent },
  { path: 'edit-form', component: EditFormComponent },
  {path: 'sandbox', component:SandboxComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
