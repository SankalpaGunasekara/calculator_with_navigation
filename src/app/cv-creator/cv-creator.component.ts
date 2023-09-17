import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { count } from 'rxjs';

import * as jsPdf from 'jspdf'
import html2canvas from 'html2canvas';


@Component({
  selector: 'app-cv-creator',
  templateUrl: './cv-creator.component.html',
  styleUrls: ['./cv-creator.component.css']
})
export class CvCreatorComponent {


  make: string = ''
  model: string = ''
  grade: string = ''
  year: string = ""
  vehiNum1: string = ''
  vehiNum2: string = ""
  engNumber: string = ""
  description: string = ''

  ChassisNo: string = ''
  EngineCapacity: string = ''
  Transmission: string = ''
  FuelType: string = ''
  Color: string = ''
  SeatingCap: string = ''

  checkedFont: string = ''
  default: boolean = true;
  specialFont1: boolean = false;
  specialFont2: boolean = false;

  fonts: { [key: string]: any } = {

    default: this.default,
    specialFont1: this.specialFont1
  }

  allCap(data:string){

    const cache = data.toUpperCase()
    return cache


  }


  fontChecked(fontName: string) {

    if (fontName === 'font01') {
      this.checkedFont = fontName
      this.specialFont2 = false
      this.default = false

    }
    else if (fontName === 'font02') {
      this.checkedFont = fontName
      this.specialFont1 = false
      this.default = false

    }
    else {
      this.checkedFont = 'default'
      this.specialFont1 = false
      this.specialFont2 = false
    }

    console.log(this.checkedFont)
  }




  dataCap(data: string) {

    const cache = data.charAt(0).toUpperCase() + data.slice(1);
    return cache;

  }

  propertyValues: { [key: string]: string } = {

    make: this.make,
    model: this.model,
    grade: this.grade,
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


  // PDF generation using jsPDF library and html2canvas - referenced - https://www.positronx.io/angular-pdf-tutorial-export-pdf-in-angular-with-jspdf/

  public GenPdfAsImg(): void {
    let DATA: any = document.getElementById('toPrint');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jsPdf.jsPDF('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI,'JPG', 0, position, fileWidth, fileHeight, 'SLOW');
      let Model = this.model.charAt(0).toUpperCase() + this.model.slice(1)
      PDF.save(this.make+Model+this.year);
    });
  }

  public openPDF(): void {
    // Get the HTML element by ID
    const element = document.getElementById('toPrint');
  
    // Create a new jsPDF instance
    const PDF = new jsPdf.jsPDF('p', 'mm', 'a4');
  
    // Check if the element exists
    if (element!= null) {
      // Get the inner text of the element
      const content = element.innerText+ element.style
  
      // Add the content to the PDF
      PDF.text(content, 10, 10); // Add text at coordinates (10, 10)
  
      // Save or download the PDF
      let Model = this.model.charAt(0).toUpperCase() + this.model.slice(1);
      PDF.save(this.make + Model + this.year + '.pdf');
    } else {
      console.error('Element with ID "toPrint" not found.');
    }
  }
  

}
