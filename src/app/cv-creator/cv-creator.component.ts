import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cv-creator',
  templateUrl: './cv-creator.component.html',
  styleUrls: ['./cv-creator.component.css']
})
export class CvCreatorComponent {

  capitalizedWord: string = ''
  make: string = 'Toyota'
  model: string = 'Hilux'
  grade: string = 'G'
  year: string = "2018"
  // description:string = ''

  capitalize(value: string, placeholder: string): void {

    let cache = ''
    cache = value.charAt(0).toUpperCase() + value.slice(1, value.length);
    // placeholder = 

  }


}
