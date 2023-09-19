import { Component } from '@angular/core';
import { districtsData } from '../districts/districts-data';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css']
})

export class AddFormComponent {

  dataExists = false
  data = districtsData
  ID: number = 0
  name: string = ''
  editData() {

  }

  deleteData() {

  }

  addData() {

    let exist = false;
    const newDistrict = {
      id: this.ID,
      name: this.name
    }

    for (let district of districtsData) {
      console.log(district.id)
      console.log(district.name)
      if (district.id == this.ID && district.name == this.name || district.id == this.ID) {
        exist = true

        break;
      }
    }
    if (!exist) {
      this.data.push(newDistrict)
    }
    else {
      this.dataExists = true
      console.log("Exists")
    }





  }

}
