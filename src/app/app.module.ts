import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalcComponent } from './Components/calc/calc.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './Components/nav/nav.component';
import { HomeComponent } from './Components//home/home.component';
import { DistrictsComponent } from './Components/districts/districts.component';
import { CvCreatorComponent } from './Components/cv-creator/cv-creator.component';
import { VechicleSpecsComponent } from './Components//vechicle-specs/vechicle-specs.component';
import { AddFormComponent } from './Components//add-form/add-form.component';
import { EditFormComponent } from './Components//edit-form/edit-form.component';
import { SandboxComponent } from './Components/sandbox/sandbox.component'

@NgModule({
  declarations: [
    AppComponent,
    CalcComponent,
    NavComponent,
    HomeComponent,
    DistrictsComponent,
    CvCreatorComponent,
    VechicleSpecsComponent,
    AddFormComponent,
    EditFormComponent,
    SandboxComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
