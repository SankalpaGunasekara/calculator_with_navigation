import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalcComponent } from './calc/calc.component';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { DistrictsComponent } from './districts/districts.component';
import { CvCreatorComponent } from './cv-creator/cv-creator.component';
import { VechicleSpecsComponent } from './vechicle-specs/vechicle-specs.component';
import { AddFormComponent } from './add-form/add-form.component';
import { EditFormComponent } from './edit-form/edit-form.component'

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
