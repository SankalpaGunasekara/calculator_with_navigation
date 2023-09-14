import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { count } from 'rxjs';

@Component({
  selector: 'app-cv-creator',
  templateUrl: './cv-creator.component.html',
  styleUrls: ['./cv-creator.component.css']
})
export class CvCreatorComponent {
  make: string = 'Toyota'
  model: string = 'Hilux'
  grade: string = 'G'
  year: string = "2018"
  vehiNumber: string = '123123'
  engNumber: string = "123123"
  description:string = ''

  applyFont01:boolean=false


  dataCap(data: string) {

    const cache = data.charAt(0).toUpperCase() + data.slice(1);
    console.log(cache)
    return cache;

  }

  propertyValues: { [key: string]: string } = {

    make:this.make,
    model:this.model,
    grade:this.grade,
    year: this.year,

  }

  // inputClick(event: Event, variable: string) {
  //   if (variable in this.propertyValues) {
  //     this.propertyValues[variable] = '';
  //   }
  // }
  

  // getDataVar(value:any):string{
  //   return this.dataVariables[value]
  // }


  // capitalize(value: string, placeholder: string):void {

  //   if (placeholder in this.dataVariables) {
  //     const cache = value.charAt(0).toUpperCase() + value.slice(1);
  //     this.dataVariables[placeholder] = cache
  //     console.log(cache)
  //     console.log(this.dataVariables[placeholder])


  //   }


  // placeholder = 

  // }




}
